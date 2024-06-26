function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6crdmYe6FP2":
        Script1();
        break;
      case "6djCuJTBVfh":
        Script2();
        break;
      case "63MD3XDJoIo":
        Script3();
        break;
      case "6ZREoJzm1fH":
        Script4();
        break;
      case "5d2AaL6DLef":
        Script5();
        break;
      case "5f32nJCiDMU":
        Script6();
        break;
      case "62b2q4UCCUJ":
        Script7();
        break;
      case "6T9WSxASuXY":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('66nqoq5itkg');
const duration = 750;
const easing = 'ease-out';
const id = '6fCHvc4bj0j';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6oZHr8AzXS8');
const duration = 750;
const easing = 'ease-out';
const id = '5dOPKCPw22b';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5a5BVmaHRAS');
const duration = 2500;
const easing = 'ease-out';
const id = '5ivyYF4wAFz';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6XVBTegnqfS');
const duration = 2500;
const easing = 'ease-out';
const id = '6hjduVBxoMa';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6XHxoAlIyBE');
const duration = 2500;
const easing = 'ease-out';
const id = '5hU2JPxj02n';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5kKw0ZiwZzb');
const duration = 2500;
const easing = 'ease-out';
const id = '5svHRoull3l';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 1500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('5cZ6rf0spyJ');
const duration = 2500;
const easing = 'ease-out';
const id = '6hRBURQm1Pw';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 1500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  player.once(() => {
const target = object('5zPxJUUefbV');
const duration = 2500;
const easing = 'ease-out';
const id = '6HWNg5MHJOi';
const teeterAmount = 4;
const signs = ['-', '', '-'];

const delay = 1500;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
