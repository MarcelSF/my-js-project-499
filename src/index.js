// Import your files and functions
import { fetchMovies, fetchResults } from './movies.js'
import { initSortable } from './plugins/init_sortablejs.js'
import { initMarkdown } from './plugins/init_markdown' // Import the initialize Markdown function
import { initSelect2 } from './plugins/init_select2.js';

// Initialize your plugins
initSortable();
initMarkdown(); // don't forget to actually CALL the function
initSelect2();

// Call your AJAX functions
fetchMovies('lord of the rings');

// Add Your event Listeners
const form = document.getElementById('search-movies');
form.addEventListener('submit', fetchResults);
