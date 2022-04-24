import React, { ReactComponentElement, useState } from "react";
import { Pagination } from "react-bootstrap";
import MainContainer from "./../MainContainer/index";
import useGet from "../../../hooks/useGet";
import Loader from "../../main/Loader";

const ShowInPagination: React.FC<{
  apiLink: string;
  itemsInJSX: (items: any[]) => ReactComponentElement<any>;
  countApi: string;
}> = ({ apiLink, itemsInJSX, countApi }) => {
  // CurrentPage: calc the page of pagination [ for requests ]
  const [CurrentPage, setCurrentPage] = useState(1);
  // active: find where's the active page
  const [active, setActive] = useState(1);
  // pageNumber: about show the bullets for pagination
  const [pagesNumber, setPagesNumber] = useState(5);
  // numberNow: about start the for loop from it
  const [numberNow, setNumberNow] = useState(1);
  // items: this request's response about get the items from
  // the db by pagination system
  const { isDataReady, data: items } = useGet(`${apiLink}?page=${CurrentPage}`);

  // countitems about get data from db and count all of it
  const { isDataReady: isCountReady, data: countitems } = useGet(countApi);

  // is about calculating all the pages that can hold 10 items
  const counts = isCountReady && Math.ceil(countitems / 10);

  /**
   * itemsHandler(eo)
   * this function is about get the page that you clicked on it
   * and set this page in active state
   * then set this page in current page state
   * then scroll to the top
   * then check if the activeNumber isn't smaller than 3 and
   * isn't bigger than the counts - 4
   */
  const itemsHandler = (eo) => {
    window.scrollTo(0, 0);
    const activeNumb = parseInt(eo.target.getAttribute("data-no"));
    setActive(activeNumb);
    setCurrentPage(activeNumb);
    if (activeNumb !== active) {
      if (activeNumb > 3 && activeNumb < counts - 4) {
        // if the number was increased
        if (numberNow < activeNumb && activeNumb - numberNow !== 1) {
          if (activeNumb - numberNow === 3) {
            setPagesNumber(pagesNumber + 1);
            setNumberNow(numberNow + 1);
          } else {
            setPagesNumber(pagesNumber + 2);
            setNumberNow(numberNow + 2);
          }
        } else {
          if (activeNumb - numberNow === 1) {
            setPagesNumber(pagesNumber - 1);
            setNumberNow(numberNow - 1);
          } else {
            setPagesNumber(pagesNumber - 2);
            setNumberNow(numberNow - 2);
          }
        }
      } else if (activeNumb <= counts && activeNumb >= counts - 4) {
        setNumberNow(counts - 5);
        setPagesNumber(counts - 1);
      } else {
        setNumberNow(1);
        setPagesNumber(5);
      }
    }
  };

  // for the first and last items
  const specialItems = (eo) => {
    window.scrollTo(0, 0);
    const activeNumb = parseInt(eo.target.getAttribute("data-no"));
    setActive(activeNumb);
    setCurrentPage(activeNumb);
    setNumberNow(activeNumb - 4);
    setPagesNumber(activeNumb);
  };

  // for next
  const goNext = () => {
    window.scrollTo(0, 0);
    setActive(active + 1);
    setCurrentPage(active + 1);
    if (active < counts) {
      if (active > 2) {
        setPagesNumber(pagesNumber + 1);
        setNumberNow(numberNow + 1);
      }
    }
  };

  // for previous
  const goPrev = () => {
    window.scrollTo(0, 0);
    setActive(active - 1);
    setCurrentPage(active - 1);
    if (active > 3 && active < counts - 1) {
      setPagesNumber(pagesNumber - 1);
      setNumberNow(numberNow - 1);
    }
  };

  // items is about the items that hold for showing it
  let bullets = [];

  for (let number = numberNow; number <= pagesNumber; number++) {
    bullets.push(
      <Pagination.Item
        data-no={number}
        onClick={itemsHandler}
        key={number}
        active={+number === +active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <MainContainer fluid={false}>
      {isDataReady ? itemsInJSX(items) : <Loader many={10} />}
      <Pagination>
        {+active !== 1 && (
          <>
            <Pagination.Prev onClick={goPrev} />
            {+active > 3 && (
              <>
                <Pagination.Item data-no={1} onClick={itemsHandler}>
                  {1}
                </Pagination.Item>
                <Pagination.Ellipsis />
              </>
            )}
          </>
        )}

        {bullets}

        {+active !== counts && (
          <>
            {+active < counts - 4 && (
              <>
                <Pagination.Ellipsis />
                <Pagination.Item data-no={counts} onClick={specialItems}>
                  {counts}
                </Pagination.Item>
              </>
            )}
            <Pagination.Next onClick={goNext} />
          </>
        )}
      </Pagination>
    </MainContainer>
  );
};

export default ShowInPagination;
