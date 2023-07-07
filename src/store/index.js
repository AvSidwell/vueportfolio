import { createStore } from "vuex";

export default createStore({
  state: {
    myProjects: null,
    myProject: null,
    Educations: null,
    Education: null,
    mySkills: null,
    mySkill: null,
    myTestimonials: null,
    myTestimonial: null,
    Me: null,
    andMe: null,
  },
  mutations: {
    setmyProjects: (state, myProjects) => {
      state.myProjects = myProjects;
    },
    setmyProject: (state, myProject) => {
      state.myProject = myProject;
    },
    setEducations: (state, Educations) => {
      state.Educations = Educations;
    },
    setEducation: (state, Education) => {
      state.Education = Education;
    },
    setmySkills: (state, mySkills) => {
      state.mySkills = mySkills;
    },
    setmySkill: (state, mySkill) => {
      state.mySkill = mySkill;
    },
    setmyTestimonials: (state, myTestimonials) => {
      state.myTestimonials = myTestimonials;
    },
    setmyTestimonial: (state, myTestimonial) => {
      state.myTestimonial = myTestimonial;
    },
    setMe: (state, Me) => {
      state.Me = Me;
    },
    setandMe: (state, andMe) => {
      state.andMe = andMe;
    },
  },
  actions: {
    getmyProjects: async (context) => {
      fetch("https://avsidwell.github.io/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setmyProjects", data.myProjects));
    },
    getmyProject: async (context, id) => {
      fetch("https://avsidwell.github.io/data.json/" + id)
        .then((res) => res.json())
        .then((myProject) => context.commit("setmyProject", myProject));
    },
    getEducations: async (context) => {
      fetch("https://avsidwell.github.io/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setEducations", data.Educations));
    },
    getEducation: async (context, id) => {
      fetch("https://avsidwell.github.io/data.json/" + id)
        .then((res) => res.json())
        .then((Education) => context.commit("setEducation", Education));
    },
    getmySkills: async (context) => {
      fetch("https://avsidwell.github.io/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setmySkills", data.mySkills));
    },
    getmySkill: async (context, id) => {
      fetch("https://avsidwell.github.io/data.json/" + id)
        .then((res) => res.json())
        .then((mySkill) => context.commit("setmySkill", mySkill));
    },
    getmyTestimonials: async (context) => {
      fetch("https://avsidwell.github.io/data.json")
        .then((res) => res.json())
        .then((data) =>
          context.commit("setmyTestimonials", data.myTestimonials)
        );
    },
    getmySkill: async (context, id) => {
      fetch("https://avsidwell.github.io/data.json/" + id)
        .then((res) => res.json())
        .then((myTestimonial) =>
          context.commit("setmyTestimonial", myTestimonial)
        );
    },
    getMe: async (context) => {
      fetch("https://avsidwell.github.io/data.json")
        .then((res) => res.json())
        .then((data) => context.commit("setMe", data.Me));
    },
    getandMe: async (context) => {
      fetch("https://avsidwell.github.io/data.json/" + id)
        .then((res) => res.json())
        .then((andMe) => context.commit("setandMe", andMe));
    },
  },
});
