# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/games:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
  "game": {
    "cell": {
      "index": "'"$INDEX"'",
      "value": "'"$PLAYER"'"
    },
    "over": false
  }
}'

echo
