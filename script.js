/*
  Site behaviour will live here.
  data.js loads first, so portfolioData is available when this file runs.
*/

document.addEventListener("DOMContentLoaded", function () {
  const portfolioContainer = document.getElementById("portfolio-content");

  // Confirm that the content model is ready before rendering the hero.
  if (!portfolioData || !portfolioContainer) {
    console.warn("Portfolio data or page container is missing.");
    return;
  }

  // Render dynamic content if the page shell is empty.
  if (portfolioContainer.children.length === 0) {
    renderHero(portfolioData.hero, portfolioContainer);
    renderBecoming(portfolioData.becoming, portfolioContainer);
    renderJourney(portfolioData.timeline, portfolioContainer);
    renderLearning(portfolioData.learning, portfolioContainer);
    renderBuildingVision(portfolioData.whatIWantToBuild, portfolioContainer);
    renderThingsTried(portfolioData.thingsTried, portfolioContainer);
    renderClosingContact(portfolioData.contact, portfolioContainer);
  }
  enableScrollReveal();
  enableScrollEffects();
});

/*
  Creates the opening section from the content in data.js.
  Keeping this separate makes future content updates independent of the layout.
*/
function renderHero(heroData, container) {
  const heroSection = document.createElement("section");
  heroSection.className = "hero";
  heroSection.setAttribute("aria-labelledby", "hero-heading");

  // Each word becomes its own line while the editable headline stays simple in data.js.
  const headlineLines = heroData.headline
    .split(" ")
    .map(function (line) {
      return `<span class="hero__headline-line">${line}</span>`;
    })
    .join("");

  // The image is decorative because the written content carries the meaning.
  heroSection.innerHTML = `
    <img class="hero__image" src="${heroData.image}" alt="" />
    <div class="hero__overlay" aria-hidden="true"></div>
    <div class="hero__content">
      <div class="hero__identity">
        <p class="hero__name">${heroData.name}</p>
        <p class="hero__role">${heroData.role}</p>
        <p class="hero__institution">${heroData.institution}</p>
      </div>
      <p class="hero__eyebrow">${heroData.eyebrow}</p>
      <h1 class="hero__headline" id="hero-heading">${headlineLines}</h1>
      <p class="hero__subheadline">${heroData.subheadline}</p>
    </div>
    <p class="hero__scroll-indicator">
      <span>Scroll to follow the story</span>
      <span class="hero__scroll-arrow" aria-hidden="true">↓</span>
    </p>
  `;

  container.appendChild(heroSection);
}

/*
  Creates the reflective second chapter from the "becoming" content in data.js.
  The emphasis list is presentational only; the original paragraph text stays in data.js.
*/
function renderBecoming(becomingData, container) {
  const emphasisPhrases = [
    "finished version of myself",
    "growth usually starts before confidence arrives",
    "notice more, ask better questions"
  ];

  const section = document.createElement("section");
  section.className = "becoming";
  section.setAttribute("aria-labelledby", "becoming-heading");

  const layout = document.createElement("div");
  layout.className = "becoming__layout";

  const heading = document.createElement("h2");
  heading.className = "becoming__title";
  heading.id = "becoming-heading";
  heading.textContent = becomingData.title;
  heading.setAttribute("data-reveal", "");

  const copy = document.createElement("div");
  copy.className = "becoming__copy";

  becomingData.paragraphs.forEach(function (paragraph, index) {
    const paragraphElement = document.createElement("p");
    paragraphElement.className =
      "becoming__paragraph becoming__paragraph--" +
      (index + 1) +
      " reveal--delay-" +
      index;
    paragraphElement.setAttribute("data-reveal", "");
    addEmphasis(paragraphElement, paragraph, emphasisPhrases[index]);
    copy.appendChild(paragraphElement);
  });

  const transition = document.createElement("p");
  transition.className = "becoming__transition";
  transition.textContent = "The story starts before the code.";
  transition.setAttribute("data-reveal", "");

  layout.append(heading, copy);
  section.append(layout, transition);
  container.appendChild(section);
}

/* Creates the documentary timeline from the ordered milestone array in data.js. */
function renderJourney(timelineData, container) {
  const section = document.createElement("section");
  section.className = "journey";
  section.setAttribute("aria-labelledby", "journey-heading");

  const header = document.createElement("header");
  header.className = "journey__header";

  const label = document.createElement("p");
  label.className = "journey__label";
  label.textContent = "The Journey";
  label.setAttribute("data-reveal", "");

  const introduction = document.createElement("p");
  introduction.className = "journey__introduction";
  introduction.textContent =
    "Somewhere between curiosity and commitment, the direction started becoming clearer.";
  introduction.classList.add("reveal--delay-1");
  introduction.setAttribute("data-reveal", "");

  header.append(label, introduction);

  const timeline = document.createElement("div");
  timeline.className = "journey__timeline";

  timelineData.forEach(function (milestone, index) {
    const item = document.createElement("article");
    const side = index % 2 === 0 ? "left" : "right";
    const isPresent = milestone.date === "Present";

    item.className =
      "journey__milestone journey__milestone--" +
      side +
      (isPresent ? " journey__milestone--present" : "");

    const marker = document.createElement("div");
    marker.className = "journey__marker";
    marker.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "journey__content";
    content.setAttribute("data-reveal", "");

    const meta = document.createElement("div");
    meta.className = "journey__meta";

    const date = document.createElement("p");
    date.className = "journey__date";
    date.textContent = milestone.date;

    const category = document.createElement("p");
    category.className = "journey__category";
    category.textContent = milestone.category;

    meta.append(date, category);

    const title = document.createElement("h3");
    title.className = "journey__title";
    title.textContent = milestone.title;

    const description = document.createElement("p");
    description.className = "journey__description";
    description.textContent = milestone.description;

    const figure = document.createElement("figure");
    figure.className = "journey__figure";
    figure.setAttribute("data-reveal-image", "");

    const image = document.createElement("img");
    image.className = "journey__image";
    image.src = milestone.image;
    image.alt = milestone.title;
    image.loading = "lazy";

    figure.appendChild(image);
    content.append(meta, title, description, figure);
    item.append(content, marker);
    timeline.appendChild(item);
  });

  section.append(header, timeline);
  container.appendChild(section);
}

/* Renders the current learning pillars without turning them into portfolio cards. */
function renderLearning(learningData, container) {
  const section = document.createElement("section");
  section.className = "learning";
  section.setAttribute("aria-labelledby", "learning-heading");

  const layout = document.createElement("div");
  layout.className = "learning__layout";

  const heading = document.createElement("h2");
  heading.className = "learning__title";
  heading.id = "learning-heading";
  heading.textContent = learningData.title;
  heading.setAttribute("data-reveal", "");

  const list = document.createElement("ol");
  list.className = "learning__list";

  learningData.pillars.forEach(function (pillar) {
    const item = document.createElement("li");
    item.className = "learning__pillar";
    item.setAttribute("data-reveal", "");

    const number = document.createElement("span");
    number.className = "learning__number";
    number.textContent = String(list.children.length + 1).padStart(2, "0");
    number.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "learning__pillar-content";

    const title = document.createElement("h3");
    title.className = "learning__pillar-title";
    title.textContent = pillar.title;

    const description = document.createElement("p");
    description.className = "learning__pillar-description";
    description.textContent = pillar.description;

    content.append(title, description);
    item.append(number, content);
    list.appendChild(item);
  });

  layout.append(heading, list);
  section.appendChild(layout);
  container.appendChild(section);
}

/* Renders future directions as a continuing story, not as completed project claims. */
function renderBuildingVision(buildingData, container) {
  const section = document.createElement("section");
  section.className = "building-vision";
  section.setAttribute("aria-labelledby", "building-vision-heading");

  const layout = document.createElement("div");
  layout.className = "building-vision__layout";

  const header = document.createElement("header");
  header.className = "building-vision__header";
  header.setAttribute("data-reveal", "");

  const title = document.createElement("h2");
  title.className = "building-vision__title";
  title.id = "building-vision-heading";
  title.textContent = buildingData.title;

  const introduction = document.createElement("p");
  introduction.className = "building-vision__introduction";
  introduction.textContent = buildingData.introduction;

  header.append(title, introduction);

  const themes = document.createElement("ol");
  themes.className = "building-vision__themes";

  buildingData.themes.forEach(function (theme) {
    const item = document.createElement("li");
    item.className = "building-vision__theme";
    item.setAttribute("data-reveal", "");

    const number = document.createElement("span");
    number.className = "building-vision__number";
    number.textContent = theme.number;
    number.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "building-vision__theme-content";

    const themeTitle = document.createElement("h3");
    themeTitle.className = "building-vision__theme-title";
    themeTitle.textContent = theme.title;

    const description = document.createElement("p");
    description.className = "building-vision__theme-description";
    description.textContent = theme.description;

    content.append(themeTitle, description);
    item.append(number, content);
    themes.appendChild(item);
  });

  layout.append(header, themes);
  section.appendChild(layout);
  container.appendChild(section);
}

/* Documents real attempts without presenting them as a polished project catalogue. */
function renderThingsTried(triedData, container) {
  const section = document.createElement("section");
  section.className = "things-tried";
  section.setAttribute("aria-labelledby", "things-tried-heading");

  const layout = document.createElement("div");
  layout.className = "things-tried__layout";

  const header = document.createElement("header");
  header.className = "things-tried__header";
  header.setAttribute("data-reveal", "");

  const title = document.createElement("h2");
  title.className = "things-tried__title";
  title.id = "things-tried-heading";
  title.textContent = triedData.title;

  const introduction = document.createElement("p");
  introduction.className = "things-tried__introduction";
  introduction.textContent = triedData.introduction;

  header.append(title, introduction);

  const entries = document.createElement("ol");
  entries.className = "things-tried__entries";

  triedData.entries.forEach(function (entry) {
    const item = document.createElement("li");
    item.className = "things-tried__entry";
    item.setAttribute("data-reveal", "");

    const number = document.createElement("span");
    number.className = "things-tried__number";
    number.textContent = entry.number;
    number.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "things-tried__entry-content";

    const metadata = document.createElement("p");
    metadata.className = "things-tried__metadata";
    metadata.textContent = entry.metadata;

    const entryTitle = document.createElement("h3");
    entryTitle.className = "things-tried__entry-title";
    entryTitle.textContent = entry.title;

    const description = document.createElement("p");
    description.className = "things-tried__description";
    description.textContent = entry.description;

    content.append(metadata, entryTitle, description);
    item.append(number, content);
    entries.appendChild(item);
  });

  layout.append(header, entries);
  section.appendChild(layout);
  container.appendChild(section);
}

/* Creates the final invitation as the last, open-ended part of the story. */
function renderClosingContact(contactData, container) {
  const section = document.createElement("section");
  section.className = "closing-contact";
  section.setAttribute("aria-labelledby", "closing-contact-heading");

  const content = document.createElement("div");
  content.className = "closing-contact__content";
  content.setAttribute("data-reveal", "");

  const label = document.createElement("p");
  label.className = "closing-contact__label";
  label.textContent = contactData.label;

  const title = document.createElement("h2");
  title.className = "closing-contact__title";
  title.id = "closing-contact-heading";
  title.textContent = contactData.title;

  const message = document.createElement("p");
  message.className = "closing-contact__message";
  message.textContent = contactData.message;

  const links = document.createElement("nav");
  links.className = "closing-contact__links";
  links.setAttribute("aria-label", "Contact links");

  contactData.links.forEach(function (contactLink) {
    const link = document.createElement("a");
    link.className = "closing-contact__link";
    link.href = contactLink.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = contactLink.label;
    links.appendChild(link);
  });

  const emailLink = document.createElement("a");
  emailLink.className = "closing-contact__link";
  emailLink.href = "mailto:" + contactData.email;
  emailLink.textContent = "Email";
  links.appendChild(emailLink);

  const footer = document.createElement("footer");
  footer.className = "closing-contact__footer";
  footer.textContent = "Satwik Kattimani · 2026";

  content.append(label, title, message, links, footer);
  section.appendChild(content);
  container.appendChild(section);
}

/* Adds semantic emphasis without changing the written content stored in data.js. */
function addEmphasis(element, text, phrase) {
  const phraseStart = text.indexOf(phrase);

  if (phraseStart === -1) {
    element.textContent = text;
    return;
  }

  element.append(document.createTextNode(text.slice(0, phraseStart)));

  const emphasis = document.createElement("em");
  emphasis.textContent = phrase;
  element.append(emphasis);

  element.append(document.createTextNode(text.slice(phraseStart + phrase.length)));
}

/* Reveals reflective sections when they enter the visitor's viewport. */
function enableScrollReveal() {
  const revealElements = document.querySelectorAll(
    "[data-reveal], [data-reveal-image]"
  );

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach(function (element) {
    observer.observe(element);
  });
}

/*
  Uses one animation-frame update for the two scroll-linked details:
  the Hero image moves more slowly than the page, and the timeline fills as it is read.
*/
function enableScrollEffects() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const hero = document.querySelector(".hero");
  const heroImage = document.querySelector(".hero__image");
  const timelines = document.querySelectorAll(".journey__timeline");

  if (reducedMotion) {
    timelines.forEach(function (timeline) {
      timeline.style.setProperty("--timeline-progress", "1");
      activateVisibleMilestones(timeline);
    });
    return;
  }

  let animationFrameRequested = false;

  function updateScrollEffects() {
    const viewportHeight = window.innerHeight;

    if (hero && heroImage) {
      const heroBounds = hero.getBoundingClientRect();
      const scrollDistance = Math.min(Math.max(-heroBounds.top, 0), 560);
      heroImage.style.setProperty("--hero-parallax", scrollDistance * 0.1 + "px");
    }

    timelines.forEach(function (timeline) {
      const timelineBounds = timeline.getBoundingClientRect();
      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.25;
      const travelDistance = timelineBounds.height + startPoint - endPoint;
      const progress = Math.min(
        Math.max((startPoint - timelineBounds.top) / travelDistance, 0),
        1
      );

      timeline.style.setProperty("--timeline-progress", progress);
      activateVisibleMilestones(timeline);
    });

    animationFrameRequested = false;
  }

  function requestScrollUpdate() {
    if (!animationFrameRequested) {
      window.requestAnimationFrame(updateScrollEffects);
      animationFrameRequested = true;
    }
  }

  window.addEventListener("scroll", requestScrollUpdate, { passive: true });
  window.addEventListener("resize", requestScrollUpdate);
  updateScrollEffects();
}

/* Marks timeline moments as active once they reach the reader's focus area. */
function activateVisibleMilestones(timeline) {
  const activationPoint = window.innerHeight * 0.72;
  const milestones = timeline.querySelectorAll(".journey__milestone");

  milestones.forEach(function (milestone) {
    if (milestone.getBoundingClientRect().top < activationPoint) {
      milestone.classList.add("is-active");
    }
  });
}
