// Replace images with your own work (put files in public/images and update paths). Titles should describe the real photo.
export const portfolioCategories = ['Photography', 'Drone', 'Photo Frames', 'Banners', 'Editing'];
const p = (id, title, category) => ({ id, title, category, image: `/images/portfolio-${id}.svg` });
export const portfolio = [
  p(1, 'Portrait sample', 'Photography'), p(2, 'Aerial sample', 'Drone'), p(3, 'Framed print sample', 'Photo Frames'), p(4, 'Banner sample', 'Banners'),
  p(5, 'Retouch sample', 'Editing'), p(6, 'Event sample', 'Photography'), p(7, 'Drone video still sample', 'Drone'), p(8, 'Frame display sample', 'Photo Frames'),
];
