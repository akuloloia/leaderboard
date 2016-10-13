/**
 *
 *
 * Created by Tony on 10/12/2016.
 */

console.log("Hello world");
PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function () {
      return PlayersList.find();
    },
    'selectedClass': function () {
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if (playerId == selectedPlayer) {
        return "selected";
      }
    }
  });
  Template.leaderboard.events({
    'click .player': function () {
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
    }
  });
}

if (Meteor.isServer) {

}