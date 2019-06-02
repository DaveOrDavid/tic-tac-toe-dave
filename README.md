Project title: Tic Tac Toe Dave

Wireframe album
https://imgur.com/a/NhTeiZU

Techologies Used:
JavaScript
jQuery
Bootstrap
Authentication and Game APIs
SCSS

User Stories:
-- As a game player, I want to clearly see what I need to do next
-- As a mobile user, I want to be able to play this on a tablet
-- As a player, I want to have a simple layout
-- As a player, I want to know how many times I have played the game.

The Tic Tac Toe application planning process started with a SPA responsive site optimized for all display sizes. Wireframing included two pages, but quickly changed to one page with login details on the same page as the game itself.

The game-board was designed with bootstrap for simplicity when resizing jQuery event listeners were placed on each box to listen for user clicks, and then set off a chain of functions depending on what the game player clicked.

For updates made on the resubmission, I made heavier use of the store{} object.
Store.user to reference if I user had signed up/signed in, and I created store.canPlay
as a comparison from signing in and clicking Start Game. Both would update on
successful API actions.

Additionally, forms would clear and pre-population was removed. Store.xxx references
were used for comparing to display the correct user messages

v3.0 plans for Tic Tac Toe are a much heavier CSS focus, as this is not the
most visually pleasing game. I'd like to leverge setTimeout functions as well.

Reflections
I feel I can read and interpret parts of JavaScript better than I did on the
first submission of the project. During v2.0, I was able to see how code was structured
and how it interacted with different parts of the project. For writing JS, I
feel that I can write a version that is messy, but can "work." I'm looking
forward to future iterations that can be DRYer in JS and more visually
appealing in CSS.
