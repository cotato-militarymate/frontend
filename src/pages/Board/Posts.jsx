import React, { useState, useCallback, useRef, useEffect } from "react";
import { styled } from "styled-components";
import PostPreview from "./PostPreview";
import postings from "./postings.json";
import InfiniteScroll from "./InfiniteScroll";
import NoSearchResult from "./NoSearchResult";

const Posts = (props) => {
  const setSelect = props.setSelect;
  const initialPostingList = postings.postings.slice(0, 3);
  const [postingList, setPostingList] = useState(initialPostingList);
  const [selected, setSelected] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const pageSize = 3;

  const [uploadText, setUploadText] = useState("게시물 작성하기");

  const inputRef = useRef(null);
  const [search, setSearch] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = postings.postings.filter(
    (post) =>
      post.question.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  const SearchResult =
    searchResult.length === 0 ? (
      <NoSearchResult />
    ) : (
      searchResult.map((posting) => (
        <PostPreview
          key={posting.id}
          selected={posting.id === selected}
          id={posting.id}
          date={posting.date}
          likeCount={posting.likeCount}
          commentCount={posting.commentCount}
          question={posting.question}
          description={posting.description}
          answers={posting.answers}
          setSelected={setSelected}
        />
      ))
    );

  function fetchPostings(pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, postings.postings.length);
    return postings.postings.slice(startIndex, endIndex);
  }

  const fetchMoreData = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
    setIsLoading(true);
    const newPostings = fetchPostings(currentPage + 1);

    if (newPostings.length === 0) {
      setHasMoreData(false);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setPostingList((prev) => [...prev, ...newPostings]);
      setIsLoading(false);
    }, 500);
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const UpButton = document.querySelector(".upButton");
      UpButton &&
        (window.scrollY > 500
          ? UpButton.classList.add("active")
          : UpButton.classList.remove("active"));
    });

    if (inputRef.current) {
      inputRef.current.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          setSearch(true);
        }
      });
    }
  }, []);

  const onClickUpButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Section>
        <BoardHeader>
          <div>
            <p
              onClick={() => {
                setSelect("writing");
              }}
            >
              {uploadText}
            </p>
          </div>
        </BoardHeader>
        {search
          ? SearchResult
          : postingList.map((posting) => (
              <PostPreview
                key={posting.id}
                selected={posting.id === selected}
                id={posting.id}
                date={posting.date}
                likeCount={posting.likeCount}
                commentCount={posting.commentCount}
                question={posting.question}
                description={posting.description}
                answers={posting.answers}
                setSelected={setSelected}
              />
            ))}

        <InfiniteScroll
          fetchMoreData={fetchMoreData}
          hasMoreData={hasMoreData}
        />
      </Section>
      <UpButton
        src="https://velog.velcdn.com/images/ea_st_ring/post/0d58758d-1570-463e-a1db-812b010f4125/image.svg"
        className="upButton"
        onClick={onClickUpButton}
      />
      {isLoading && (
        <LoadingContainer>
          <img
            src="https://velog.velcdn.com/images/ea_st_ring/post/7d1e83d2-18fb-479b-9550-4fcf21936ee3/image.gif"
            alt="로딩 중"
            width={100}
            height={100}
          />
        </LoadingContainer>
      )}
    </div>
  );
};

const Section = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 60px 240px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    padding: 0px 16px;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    // ... (Styles remain unchanged, but I've removed the background-color as requested)
    display: flex;
    border-radius: 8px;
    padding: 12px 8px;
    width: 138px;
    height: 16px;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.9rem;
      color: white;
      margin: 0;
      font-weight: 600;
      line-height: 150%;
      text-align: center;
      cursor: pointer;
    }
  }

  /* 오른쪽 정렬을 위한 스타일 */
  @media screen and (min-width: 501px) {
    justify-content: flex-end;
    padding-right: 16px;
  }

  @media screen and (max-width: 500px) {
    padding: 60px 16px 0px 16px;
    margin-top: 110px;
    height: 100px;
    div {
      width: 80px;
    }
    div p {
      font-size: 14px;
      color: #1e1e1e;
    }
  }
`;

const SearchInput = styled.input`
  width: 700px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #76e481;
  text-align: start;
  padding: 0 48px;
  margin-right: 32px;
  @media screen and (max-width: 500px) {
    margin-right: 10px;
    padding: 0px 0px 0px 20px;
    width: 360px;
  }
`;

const UpButton = styled.img`
  display: none;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  position: fixed;
  bottom: 70px;
  right: 100px;
  cursor: pointer;
  &.active {
    display: flex;
  }
  @media screen and (max-width: 500px) {
    bottom: 40px;
    right: 50px;
    width: 40px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10;
`;

export default Posts;
