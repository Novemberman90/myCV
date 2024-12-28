window.addEventListener('DOMContentLoaded', ()=>{

  /* contact */
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--tel" href="tel:${data.phone[0]}">${data.phone[1]}</a></li>`;
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--mail" href="mailto:${data.email}">${data.email}</a></li>`;
  document.querySelector('.contact__list').innerHTML +=` <li class="contact__item"><a class="contact__link contact__link--telegram" href="https://t.me/@NovemberMan90">Telegram</a></li>`;
  document.querySelector('.contact__list').innerHTML += `<li class="contact__item"><a class="contact__link contact__link--ln" href="${data.linkedIn}" target="_blank">LinkedIn</a></li>`;
  document.querySelector('.contact__list').innerHTML += `<li class="contact__item"><a class="contact__link contact__link--git" href="${data.github}" target="_blank">Git</a></li>`;
  

  /* skills */

  const teckSkillsList = document.querySelector('.tech__list'),
        softSkillsList = document.querySelector('.soft__list');
  
  function renderSkills() {

    if (teckSkillsList) {
       let skillsData ='';
       data.skills.forEach(item => {
      skillsData += `<li class="tech__item">${item}</li>`;
      });
      teckSkillsList.innerHTML = skillsData;
    };

    if (softSkillsList) {
      let softSkillsData ='';
      data.softSkills.forEach(item => {
       softSkillsData += `<li class="soft__item">${item}</li>`;
     });
     softSkillsList.innerHTML = softSkillsData;
    };
  }
  renderSkills();

  /* projects */

  const projectsList = document.querySelector('.projects__list');
  let projectItem ='';
  projectsData.forEach(item => {
    projectItem += `<li class="projects__item"><a class="projects__link" href="${item.link}" target="_blank">${item.name}</a><span class="projects__separator"></span><div class="projects__tech">${item.tech}</div></li>`
  });

  projectsList.innerHTML = projectItem;
});