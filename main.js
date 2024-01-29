const accordion = document.querySelector(".accordion");
accordion.addEventListener("click",(e)=>{
     const activePanel = e.target.closest(".accordion-panel");
     if(!activePanel) return;
    toggleAccordion(activePanel);
});
function toggleAccordion(panelToActivate){
    const buttons = panelToActivate.parentElement.querySelectorAll('.accordion-trigger');
    const contentDivs=panelToActivate.parentElement.querySelectorAll('.accordion-content');
    const previouslyOpenPanel=panelToActivate.parentElement.querySelector('.expanded-accordion');

    buttons.forEach(button => {
     button.setAttribute('aria-expanded',false);
    });
    contentDivs.forEach(contentDiv =>{
      contentDiv.setAttribute('aria-hidden',true);
    });

    previouslyOpenPanel.classList.remove("expanded-accordion");
    panelToActivate.classList.add("expanded-accordion");
    
    panelToActivate.querySelector('.accordion-trigger').setAttribute('aria-expanded',true);
    panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden',false);
}
