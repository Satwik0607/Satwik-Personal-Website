/*
  Portfolio content lives here, separate from page behaviour and styling.
  Future updates should usually mean editing or adding data in this file.
*/

const portfolioData = {
  profile: {
    name: "Satwik Kattimani",
    education:
      "First-year B.Tech Computer Science Engineering student at Presidency University, Bangalore",
    location: "Bangalore, India",
    introduction:
      "I grew up in Hubli and now study in Bangalore. I’m learning computer science, but I’m equally interested in the questions around it: why some ideas work, why some businesses grow, and how people make decisions when the world is changing.",
    philosophy:
      "I want to stay curious long enough to understand things properly—and brave enough to try before I have every answer."
  },

  hero: {
    eyebrow: "A journey in progress · 2026",
    name: "Satwik Kattimani",
    role: "B.Tech CSE Student",
    institution: "Presidency University · Bangalore",
    headline: "Building. Exploring. Becoming.",
    subheadline:
      "From Hubli to Bangalore, from school hackathons to Himalayan trails—a record of what I am learning by stepping into unfamiliar places.",
    image: "assets/images/hampta/peakhero.jpg"
  },

  becoming: {
    title: "Who I am becoming",
    paragraphs: [
      "I am not trying to present a finished version of myself. I am still learning what I enjoy building, what kind of problems hold my attention, and how I respond when I am out of my depth.",
      "Moving cities, entering engineering, joining a hackathon, and trekking in the Himalayas have all taught me the same thing in different ways: growth usually starts before confidence arrives.",
      "For now, I am trying to notice more, ask better questions, and keep making small attempts that eventually become something bigger."
    ]
  },

  timeline: [
    {
      date: "School years · Hubli",
      title: "A smaller world, a growing curiosity",
      description:
        "Growing up in Hubli gave me space to be curious. Technology first felt like something I used; slowly, it became something I wanted to understand and create.",
      category: "Beginning",
      image: "assets/images/profile/hubli.jpg"
    },
    {
      date: "School years",
      title: "HACKNOVA 1.0",
      description:
        "Joined a school-student team building a resume website in a room full of engineering students—and left with special recognition from the judges.",
      category: "Achievement",
      image: "assets/images/hacknova/team.jpg"
    },
    {
      date: "Before B.Tech",
      title: "Hampta Pass, 14,065 ft",
      description:
        "A trek through the Himalayas that made discomfort less abstract and persistence much more physical.",
      category: "Exploration",
      image: "assets/images/hampta/peak.jpg"
    },
    {
      date: "Moving to Bangalore",
      title: "A new city, a wider frame",
      description:
        "Leaving Hubli for Bangalore changed the scale of what felt possible. New people, ideas, campuses, companies, and conversations made the world feel larger—and made me want to understand my place in it.",
      category: "Life transition",
      image: "assets/images/profile/bangalore.jpg"
    },
    {
      date: "Present",
      title: "B.Tech CSE at Presidency University",
      description:
        "Learning computer science fundamentals while trying to connect classroom concepts with the real world outside it.",
      category: "Education",
      image: "assets/images/profile/presidency-university.jpg"
    }
  ],

  stories: {
    hubliToBangalore: {
      id: "hubli-to-bangalore",
      number: "01",
      label: "A CHANGE OF PLACE",
      title: "From Hubli to Bangalore",
      subtitle:
        "The move that made the world feel bigger than the version I had known.",
      before:
        "Hubli was familiar. The people, pace, and routines gave life a certain shape. It was where curiosity began, before I had the language or exposure to know where it could lead.",
      transition:
        "Moving to Bangalore was not only about joining college. Suddenly I was surrounded by people building things, discussing startups, preparing for opportunities, and thinking several steps ahead. The city made ambition feel less like a distant idea and more like something people practiced every day.",
      perspective:
        "The move changed what I paid attention to. I began noticing how quickly industries shift, how many paths exist within technology, and how much can be learned simply by being around people who see the world differently.",
      lesson:
        "A new environment does not automatically change you, but it gives your thinking new material. Bangalore has made me more observant, more open to unfamiliar ideas, and more responsible for choosing what I want to pursue.",
      images: [
        {
          src: "assets/images/profile/hubli.jpg",
          alt: "A place in Hubli connected to Satwik's early life",
          caption: "Hubli · Where the first questions began"
        },
        {
          src: "assets/images/profile/bangalore.jpg",
          alt: "Bangalore city or university surroundings",
          caption: "Bangalore · A wider frame of reference"
        }
      ]
    },

    hacknova: {
      id: "hacknova",
      number: "02",
      label: "HACKNOVA 1.0",
      title: "The room where we were the youngest",
      subtitle:
        "A school-student team, a resume builder, and a room full of engineering students.",
      challenge:
        "We entered HACKNOVA as school students while many of the other teams were already studying engineering. That difference was obvious at first. We had less experience, fewer reference points, and a lot to figure out quickly.",
      whatWeBuilt:
        "We built a resume-builder website: a simple tool meant to help someone take scattered information about themselves and turn it into a clear, usable resume.",
      experience:
        "The memorable part was not only writing code. It was working through uncertainty as a team—deciding what mattered, explaining our idea, seeing stronger-looking projects around us, and continuing anyway.",
      recognition:
        "The judges gave our team special recognition. It was a small moment on paper, but it changed something important: we had entered a room that felt intimidating and found that our effort belonged there too.",
      lessons: [
        "Being less experienced does not mean having nothing to contribute.",
        "A project becomes more convincing when the problem is explained simply.",
        "Recognition is useful, but the bigger result was realizing that I wanted to keep building."
      ],
      images: [
        {
          src: "assets/images/hacknova/team.jpg",
          alt: "Satwik and his HACKNOVA team",
          caption: "HACKNOVA 1.0 · Learning to build as a team"
        },
        {
          src: "assets/images/hacknova/certificate.jpg",
          alt: "HACKNOVA special recognition certificate",
          caption: "Special recognition from the judges"
        }
      ]
    },

    hampta: {
      id: "hampta",
      number: "03",
      label: "HAMPTA PASS",
      title: "14,065 feet outside my comfort zone",
      subtitle:
        "A Himalayan trek that made every small step matter.",
      reasonForGoing:
        "I wanted an experience that could not be paused, refreshed, or solved from behind a screen. I wanted to see how I handled a challenge where the only option was to keep moving.",
      challenge:
        "Altitude, cold, uneven trails, tired legs, and changing weather made the trek demanding. Some parts were beautiful enough to make you stop; other parts made stopping feel like the wrong idea.",
      keyMoment:
        "Reaching Hampta Pass at 14,065 feet was not loud or dramatic. It was mostly a feeling of relief, tiredness, and quiet disbelief that so many ordinary steps had led there.",
      lesson:
        "The trek changed how I think about difficult work. Most hard things are not conquered in one brave moment. They are handled through preparation, patience, and choosing the next step when the larger distance feels overwhelming.",
      achievement: {
        title: "Completed the Hampta Pass Himalayan trek",
        detail: "Reached Hampta Pass at an altitude of 14,065 ft.",
        category: "Personal endurance and exploration"
      },
      images: [
        {
          src: "assets/images/hampta/peak.jpg",
          alt: "View from the Hampta Pass trek",
          caption: "Hampta Pass · 14,065 ft"
        },
        {
          src: "assets/images/hampta/team.jpg",
          alt: "Trekking group during the Hampta Pass journey",
          caption: "The people and steps behind the climb"
        },
        {
          src: "assets/images/hampta/certificate.jpg",
          alt: "Hampta Pass completion certificate",
          caption: "A record of the journey"
        }
      ]
    }
  },

  peopleBehindTheJourney: [
    {
      name: "FRIEND_NAME",
      role: "Friend / Trek companion",
      story:
        "A person who shared the decision to step outside our comfort zone and experience the Himalayas together."
    },
    {
      name: "FRIEND_NAME",
      role: "HACKNOVA teammate",
      story:
        "A teammate who worked alongside me during HACKNOVA 1.0 while building our resume builder project."
    }
  ],

  explorationInterests: [
    {
      name: "Technology",
      description:
        "I like looking past the app or device itself: who built it, what problem it changes, and what new habits it creates for people."
    },
    {
      name: "Finance",
      description:
        "Finance interests me because it reveals how people value the future. A business, an investment, or a budget is never only about numbers—it is also about confidence, risk, patience, and judgment."
    },
    {
      name: "Markets",
      description:
        "I am drawn to markets because they are always moving and never purely logical. Prices react to information, fear, stories, incentives, and expectations all at once. I want to understand what is actually happening underneath the daily noise."
    },
    {
      name: "Geopolitics",
      description:
        "I follow geopolitics because decisions made far away can shape technology, trade, jobs, energy, and everyday life. It makes the world feel connected, complicated, and worth paying attention to."
    },
    {
      name: "Stories & anime",
      description:
        "One Piece has made me think about dreams, freedom, loyalty, and the value of choosing your own direction even when the path looks unreasonable. Attack on Titan made me more interested in difficult choices, competing truths, cycles of conflict, and how the world becomes more complicated when you see it from another side."
    },
    {
      name: "Books",
      description:
        "Books let me sit with an idea longer than a short post ever can. I enjoy finding perspectives that make a familiar subject feel less simple."
    },
    {
      name: "Sketching",
      description:
        "Sketching helps me slow down. It is a small practice in looking carefully before deciding what I think I am seeing."
    },
    {
      name: "Podcasts",
      description:
        "I enjoy long conversations where people explain how they think—the decisions they made, the mistakes they noticed late, and the questions they are still working through."
    }
  ],

  questionsIKeepChasing: {
    title: "Questions I Keep Chasing",
    introduction:
      "These are not questions I expect to answer quickly. They are the ones that keep pulling me toward articles, conversations, projects, books, and late-night rabbit holes.",
    questions: [
      "Why do some businesses win while others with good ideas disappear?",
      "How do markets actually move when information, emotion, and incentives collide?",
      "How does technology change power—between people, companies, and countries?",
      "Why do people and societies make certain decisions, even when the consequences are visible?",
      "What makes a product useful enough to become part of someone’s everyday life?",
      "How do you stay independent in your thinking while still learning from everyone around you?"
    ]
  },

  currentLearning: [
    {
      name: "HTML",
      description:
        "Learning how a web page is structured so that it makes sense to both people and browsers."
    },
    {
      name: "CSS",
      description:
        "Learning how spacing, type, colour, and layout can make the same content feel completely different."
    },
    {
      name: "JavaScript",
      description:
        "Learning how to move from a static page to something that responds to people and carries real behaviour."
    },
    {
      name: "Python",
      description:
        "Using Python to get more comfortable with programming logic, small scripts, and problem-solving."
    },
    {
      name: "Data Structures & Algorithms",
      description:
        "Learning to slow down before coding: understand the problem, break it apart, and choose a sensible way through it."
    }
  ],

  learning: {
    title: "What I'm Learning",
    pillars: [
      {
        title: "Computer Science",
        description:
          "Learning the foundations properly — programming, problem solving, systems, and the ideas behind the technology I use every day."
      },
      {
        title: "Building",
        description:
          "Starting with small experiments and gradually learning how ideas become products, tools, and solutions."
      },
      {
        title: "Finance & Markets",
        description:
          "Exploring businesses, markets, capital, and how technology influences the way the world creates value."
      },
      {
        title: "Understanding the World",
        description:
          "Following technology, geopolitics, and human behaviour to understand the forces shaping the future."
      }
    ]
  },

  whatIWantToBuild: {
    title: "What I Want to Build",
    introduction:
      "I don't have all the answers yet. I'm more interested in finding problems worth solving, learning what it takes to solve them, and building from there.",
    themes: [
      {
        number: "01",
        title: "Technology that solves real problems",
        description:
          "Tools that make complicated things simpler, especially where technology meets everyday problems."
      },
      {
        number: "02",
        title: "Finance × Technology",
        description:
          "Products that help people understand money, markets, businesses, and opportunities with more clarity."
      },
      {
        number: "03",
        title: "Ideas worth exploring",
        description:
          "Small experiments, strange questions, and eventually — things useful enough to become real products."
      }
    ]
  },

  thingsTried: {
    title: "Things I've Tried",
    introduction:
      "A few attempts so far. Some worked, some didn't. All of them taught me something.",
    entries: [
      {
        number: "01",
        title: "HACKNOVA 1.0",
        metadata: "School hackathon",
        description:
          "Built a resume website with a student team, competing alongside engineering students and receiving special recognition from the judges."
      },
      {
        number: "02",
        title: "First Things I Built",
        metadata: "Learning by making",
        description:
          "Small experiments are where I'm learning to turn ideas into something that actually works."
      },
      {
        number: "03",
        title: "What's Next",
        metadata: "The work ahead",
        description:
          "Building more, learning faster, and gradually turning curiosity into things other people can actually use."
      }
    ]
  },

  building: [
    {
      title: "This personal documentary",
      type: "In progress",
      description:
        "Not a final portfolio, but a place to keep an honest record of projects, experiences, questions, and the person behind them."
    },
    {
      title: "Small web experiments",
      type: "Ongoing",
      description:
        "Simple projects that turn lessons from HTML, CSS, and JavaScript into things I can actually see, break, improve, and learn from."
    }
  ],

  currentVersion: {
    label: "Current version · 2026",
    title: "Still at the beginning. Paying attention.",
    description:
      "Right now, I am learning the foundations of computer science while adjusting to a new city and a larger world of possibilities. I do not have everything mapped out—and that is part of what makes this stage interesting."
  },

  futureGoals: [
    {
      title: "Build something useful enough to leave my laptop",
      description:
        "Create projects that reach real people, solve a real inconvenience, or make someone’s work a little easier."
    },
    {
      title: "Develop depth, not only surface-level familiarity",
      description:
        "Become genuinely comfortable with the fundamentals of computer science instead of collecting tools without understanding them."
    },
    {
      title: "Keep finding rooms that feel slightly intimidating",
      description:
        "Take part in hackathons, communities, collaborations, and opportunities that demand more than what I already know."
    },
    {
      title: "Stay connected to the world beyond code",
      description:
        "Keep learning about business, markets, global events, stories, and people—because technology never exists in isolation."
    }
  ],

  contact: {
    label: "Let's see where this goes",
    title: "I'm still becoming.\nLet's build something.",
    message:
      "I'm always interested in good questions, interesting problems, and people who are building something of their own.",
    email: "satwikkattimani0619@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/satwik-kattimani-145603427"
      },
      {
        label: "GitHub",
        url: "https://github.com/Satwik0607"
      }
    ]
  }
};
