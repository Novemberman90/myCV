window.addEventListener('DOMContentLoaded', ()=>{

  /* contact */
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--tel" href="tel:${data.phone[0]}">${data.phone[1]}</a></li>`;
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--mail" href="mailto:${data.email}">${data.email}</a></li>`;
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--telegram" href="https://t.me/@NovemberMan90">Telegram</a></li>`;
  document.querySelector('.contact__list').innerHTML += `<li class="contact__item"><a class="contact__link contact__link--ln" href="${data.linkedIn}" target="_blank">LinkedIn</a></li>`;
  document.querySelector('.contact__list').innerHTML += `<li class="contact__item"><a class="contact__link contact__link--git" href="${data.github}" target="_blank">Git</a></li>`;
  

  /* skills */

  const teckSkillsList = document.querySelector('.tech__list'),
        softSkillsList = document.querySelector('.soft__list'),
        projectsList = document.querySelector('.projects__list');
  
  const renderList = (element,data,itemCallback) => {
    if (!element || !data ) return;
    element.innerHTML = data.map(itemCallback).join('');
  } 
  function renderItemList() {
    /* teckSkillsList */
    renderList(
    teckSkillsList,
    data.skills,
    (item) => `<li class="tech__item">${item}</li>`
    );

 /* softSkillsList */
    renderList(
      softSkillsList,
      data.softSkills,
      (item) =>  `<li class="soft__item">${item}</li>`
    );

    /* projects */
    renderList(
      projectsList,
      projectsData,
      (item) =>`<li class="projects__item"><a class="projects__link" href="${item.link}" target="_blank">${item.name}</a><span class="projects__separator"></span><div class="projects__tech">${item.tech}</div></li>`
    );

  }
  renderItemList();

});