import { randomId } from "../utils/randomId";

export const seedJobs = [
  {
    id: randomId(),
    title: "Jumped bike chain + wheel centering",
    category: "Bikes",
    description:
      "The rear wheel rubs on the brake and the chain pops off. I'm looking for a quick fix.",
    distanceKm: 1.1,
    reward: { type: "money", amount: 25 },
    co2SavedKg: 8.2,
    photos: [
      "https://images.unsplash.com/photo-1541622555533-37aea4c9b7f9?q=80&w=1200&auto=format&fit=crop",
    ],
    location: "Gràcia, Barcelona",
    urgent: true,
  },
  {
    id: randomId(),
    title: "Sweater with hole on the elbow",
    category: "Tailoring",
    description: "Small invisible mending, similar thread available.",
    distanceKm: 0.6,
    reward: { type: "eco", amount: 5 },
    co2SavedKg: 2.1,
    photos: [
      "https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=1200&auto=format&fit=crop",
    ],
    location: "Eixample, Barcelona",
    urgent: false,
  },
  {
    id: randomId(),
    title: "Blender does not start",
    category: "Home appliances",
    description: "Possible button/contact issue. Basic brand.",
    distanceKm: 2.3,
    reward: { type: "money", amount: 30 },
    co2SavedKg: 11.4,
    photos: [
      "https://images.unsplash.com/photo-1586201375754-1421e0aa2fda?q=80&w=1200&auto=format&fit=crop",
    ],
    location: "Poblenou, Barcelona",
    urgent: false,
  },
];