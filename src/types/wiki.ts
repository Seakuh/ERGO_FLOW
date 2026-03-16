import { WikiCategory } from './common';

export interface WikiSection {
  id: string;
  heading: string;
  content: string;
}

export interface WikiArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: WikiCategory;
  readingTimeMinutes: number;
  sections: WikiSection[];
  relatedSlugs: string[];
  relatedExerciseIds: string[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

export interface WikiManifestEntry {
  slug: string;
  title: string;
  subtitle: string;
  category: WikiCategory;
  readingTimeMinutes: number;
  tags: string[];
  updatedAt: string;
}
