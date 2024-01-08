// for slider buttons
const wrapper = document.querySelector(".wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// for handling previous button click
function handlePrevButtonClick() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const step = wrapperRect.width;

  wrapper.scrollTo({
    top: 0,
    left: wrapper.scrollLeft - step,
    behavior: "smooth",
  });
}

// for handling next button click
function handleNextButtonClick() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const step = wrapperRect.width;

    wrapper.scrollTo({
        top:0,
        left: wrapper.scrollLeft + step,
        behavior: "smooth",
    });
}

prevBtn.addEventListener("click", handlePrevButtonClick);
nextBtn.addEventListener("click",handleNextButtonClick);