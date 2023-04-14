// read more/read less button
let noOfCharac = 0;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
    // if the text length is less than noOfCharac, hide the read more button
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

// carousel slider
const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
    document.querySelector(".controls .selected").classList.remove("selected");
    slider.style.transform = "translate(" + (sectionIndex) * -25 + "%)";
}

document.querySelectorAll(".controls li").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
        sectionIndex = ind;
        setIndex();
        indicator.classList.add("selected");
    });
});

// if left arrow is clicked and there is space to more, translate the section to the left by 25%
leftArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    indicatorParents.children[sectionIndex].classList.add("selected");
    setIndex();
});

// if right arrow is clicked and there is space to more, translate the section to the right by 25%
rightArrow.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    indicatorParents.children[sectionIndex].classList.add("selected");
    setIndex();
});

