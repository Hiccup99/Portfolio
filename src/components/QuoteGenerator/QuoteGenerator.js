import React, { useState } from "react";
import "./QuoteGenerator.css";
import { RiRefreshLine } from "react-icons/ri";
import { quotes } from "../../quotes";

export const QuoteGenerator = () => {
  const [refresh, setRefresh] = useState(false);
  const [quote, setQuote] = useState(1);
  const getRandomInt = () => {
    return Math.floor(Math.random() * 10);
  };

  const refreshContent = () => {
    var index = getRandomInt();
    if (index == quote) {
      setQuote(getRandomInt());
    } else {
      setQuote(index);
    }
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 500);
  };
  return (
    <div className="quoteGenerator">
      <div className="card">
        {quotes.map((item, index) => {
          if (item.id == quote) {
            return (
              <React.Fragment key={item.id}>
                <p>{item.quote}</p>
              </React.Fragment>
            );
          }
        })}
        <RiRefreshLine
          className={refresh ? "refreshIcon refresh-start" : "refreshIcon"}
          src="refresh.svg"
          onClick={() => {
            refreshContent();
          }}
        />
      </div>
    </div>
  );
};
