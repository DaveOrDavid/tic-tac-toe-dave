# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
      "games": [
        {
          "id": 1,
          "cells": ["","","","","","","","",""],
          "over": true,
          "player_x": {
            "id": 1,
            "email": "and@and.com"
          },
          "player_o": null
        },
      }'

echo
