// Badge data structure - easy to update with real badge images
// Place badge images in /public/images/badges/
// Naming convention: badge-01.png (or .svg), badge-02.png, etc.

export const badges = [
  {
    id: 1,
    title: 'Most Assessment Completed',
    category: 'Achievement',
    image: '/images/badges/badge-01.svg',
  },
  {
    id: 2,
    title: 'All Assessment Completed',
    category: 'Achievement',
    image: '/images/badges/badge-02.svg',
  },
  {
    id: 3,
    title: 'Finisher — Completed BSc Degree',
    category: 'Milestone',
    image: '/images/badges/badge-03.svg',
  },
  {
    id: 4,
    title: 'Topper — Top Course Grade',
    category: 'Academic Excellence',
    image: '/images/badges/badge-04.svg',
  },
  {
    id: 5,
    title: 'All Assessment Completed',
    category: 'Achievement',
    image: '/images/badges/badge-05.svg',
  },
  {
    id: 6,
    title: 'Topper — Top Course Grade',
    category: 'Academic Excellence',
    image: '/images/badges/badge-06.svg',
  },
  // 34 Additional Academic & Skill Badges from the IITM BS Profile Archive:
  {
    id: 7,
    title: 'High Distinction in Python',
    category: 'Programming',
    image: '/images/badges/badge-07.svg',
  },
  {
    id: 8,
    title: 'Advanced Backend Engineering',
    category: 'Systems',
    image: '/images/badges/badge-08.svg',
  },
  {
    id: 9,
    title: 'Algorithmic Problem Solving',
    category: 'Algorithms',
    image: '/images/badges/badge-09.svg',
  },
  {
    id: 10,
    title: 'Data Structures Mastery',
    category: 'Computer Science',
    image: '/images/badges/badge-10.svg',
  },
  {
    id: 11,
    title: 'Machine Learning Foundations',
    category: 'Data Science',
    image: '/images/badges/badge-11.svg',
  },
  {
    id: 12,
    title: 'Database Architecture',
    category: 'Backend',
    image: '/images/badges/badge-12.svg',
  },
  {
    id: 13,
    title: 'Applied Statistics',
    category: 'Mathematics',
    image: '/images/badges/badge-13.svg',
  },
  {
    id: 14,
    title: 'Optimization & Scalability',
    category: 'Engineering',
    image: '/images/badges/badge-14.svg',
  },
  {
    id: 15,
    title: 'Object-Oriented Design',
    category: 'Software Design',
    image: '/images/badges/badge-15.svg',
  },
  {
    id: 16,
    title: 'Computational Thinking',
    category: 'Computer Science',
    image: '/images/badges/badge-16.svg',
  },
  {
    id: 17,
    title: 'Concurrent Programming',
    category: 'Systems',
    image: '/images/badges/badge-17.svg',
  },
  {
    id: 18,
    title: 'API Design & Integration',
    category: 'Backend',
    image: '/images/badges/badge-18.svg',
  },
  {
    id: 19,
    title: 'Mathematical Thinking',
    category: 'Mathematics',
    image: '/images/badges/badge-19.svg',
  },
  {
    id: 20,
    title: 'Discrete Mathematics',
    category: 'Mathematics',
    image: '/images/badges/badge-20.svg',
  },
  {
    id: 21,
    title: 'Data Analysis with Python',
    category: 'Data Science',
    image: '/images/badges/badge-21.svg',
  },
  {
    id: 22,
    title: 'Systems Performance',
    category: 'Engineering',
    image: '/images/badges/badge-22.svg',
  },
  {
    id: 23,
    title: 'Software Testing & Quality',
    category: 'Engineering',
    image: '/images/badges/badge-23.svg',
  },
  {
    id: 24,
    title: 'Data Modeling & ETL',
    category: 'Data Science',
    image: '/images/badges/badge-24.svg',
  },
  {
    id: 25,
    title: 'Advanced Algorithms',
    category: 'Computer Science',
    image: '/images/badges/badge-25.svg',
  },
  {
    id: 26,
    title: 'Clean Code Practices',
    category: 'Craftsmanship',
    image: '/images/badges/badge-26.svg',
  },
  {
    id: 27,
    title: 'Collaborative Development',
    category: 'Teamwork',
    image: '/images/badges/badge-27.svg',
  },
  {
    id: 28,
    title: 'Technical Mentorship',
    category: 'Mentorship',
    image: '/images/badges/badge-28.svg',
  },
  {
    id: 29,
    title: 'Code Review Excellence',
    category: 'Craftsmanship',
    image: '/images/badges/badge-29.svg',
  },
  {
    id: 30,
    title: 'Capstone Project Honors',
    category: 'Milestone',
    image: '/images/badges/badge-30.svg',
  },
  {
    id: 31,
    title: 'Continuous Learning Milestone',
    category: 'Growth',
    image: '/images/badges/badge-31.svg',
  },
  {
    id: 32,
    title: 'Pythonic Excellence',
    category: 'Programming',
    image: '/images/badges/badge-32.svg',
  },
  {
    id: 33,
    title: 'Numerical Methods',
    category: 'Mathematics',
    image: '/images/badges/badge-33.svg',
  },
  {
    id: 34,
    title: 'Cloud Integration Primer',
    category: 'Infrastructure',
    image: '/images/badges/badge-34.svg',
  },
  {
    id: 35,
    title: 'Distributed Systems Primer',
    category: 'Systems',
    image: '/images/badges/badge-35.svg',
  },
  {
    id: 36,
    title: 'IITM Academic Merit I',
    category: 'Academic Honors',
    image: '/images/badges/badge-36.svg',
  },
  {
    id: 37,
    title: 'IITM Academic Merit II',
    category: 'Academic Honors',
    image: '/images/badges/badge-37.svg',
  },
  {
    id: 38,
    title: 'IITM Academic Merit III',
    category: 'Academic Honors',
    image: '/images/badges/badge-38.svg',
  },
  {
    id: 39,
    title: 'IITM Honors Roll',
    category: "Dean's Honor",
    image: '/images/badges/badge-39.svg',
  },
  {
    id: 40,
    title: 'Outstanding Term Performance',
    category: 'Recognition',
    image: '/images/badges/badge-40.svg',
  },
];

// Number of badges to show initially before "View All" button
export const INITIAL_BADGE_COUNT = 6;
