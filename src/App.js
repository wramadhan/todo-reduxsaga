import "./App.css";
import Navbar from "./Component/Navbar";
import React, { useState, useEffect } from "react";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";
import ReactLoading from "react-loading";

function App() {
  const [datas, setDatas] = useState();
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    getNews();
  }, []);
  const getNews = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&apiKey=5452ba332d4949d6b8182fe5ed5636f3",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setDatas(JSON.parse(result).articles);
      })
      .catch((error) => alert("error", error));
  };
  return (
    <div className="text-white w-auto">
      <div className="fixed w-full shadow-xl">
        <Navbar />
      </div>
      <h3 className="pt-20 font-bold text-2xl text-center py-5">
        "Remember to-do list but don't forget to be list"
      </h3>
      <TodoInput />
      <TodoList />
      <div className="py-8 px-6 mt-8 bg-[#282828]">
        {showNews ? null : (
          <>
            <h2 className="text-center mb-5 font-bold text-3xl">
              Are you bored? Want to read today's news? Click the button below
              to read today's news
            </h2>
            <div className="flex justify-center mx-6">
              <button
                onClick={() => setShowNews(true)}
                className="hover:bg-[#AF413F] hover:shadow-white active:text-[#1F1F1F]/60 active:shadow-black hover:shadow-inner active:bg-[#AF413F] p-2 border-l-4 border-r-4 font-bold rounded-full border-[#AF413F] text-xl"
              >
                Read today's news
              </button>
            </div>
          </>
        )}
        {showNews ? (
          <>
            <h2 className="text-center my-5 font-bold text-3xl">News Today</h2>
            <div className="justify-around flex w-full flex-wrap">
              {datas ? (
                datas.map((item, index) => {
                  return (
                    <div className="m-2 w-full sm:w-3/12" key={index}>
                      <img
                        src={
                          item.urlToImage
                            ? item.urlToImage
                            : "https://via.placeholder.com/750x425.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"
                        }
                        alt="news"
                      />
                      <h2 className="font-bold my-4 text-lg w-auto h-auto">
                        {item.title}
                      </h2>
                      <div className="flex justify-center mx-6">
                        <button className="hover:bg-[#AF413F] hover:shadow-white active:text-[#1F1F1F]/60 active:shadow-black hover:shadow-inner active:bg-[#AF413F] p-2 border-l-4 border-r-4 font-bold rounded-full border-[#AF413F] text-xl">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More
                          </a>
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <ReactLoading
                  type="bars"
                  color="#ffffff"
                  height="20%"
                  width="20%"
                />
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
