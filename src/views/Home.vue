<template>
  <div class="home">
    <div id='intro' class='card container'>
      <h1>Welcome to Fun Fact!</h1>
      <p>Thank you for trying out this app. I built it for learning purposes so I kept it very simple. This app was built with vue.js. I hope you enjoy it!
      </p>
      <button @click='showGameplay()'>Continue</button>
    </div>
    <div id='gamePlay' style='display:none'>
    <div id='gameTop'>
      <h1 class='gameTitle animate-text'>Fun Fact!</h1>
      <button class='explainButton' @click='explain()'>Instructions</button>
    </div>
    <div id='topics' class='card'>
      <h3 class='categoryTitle'>Categories</h3>
      <ul>
        <li><button @click='catFact()'>Cats</button></li>
        <li><button @click='dogFact()'>Dogs</button></li>
        <li><button @click='goatFact()'>Goats</button></li>
      </ul>
    </div>
    <div>
      <h2 id='fact' class='card' style='display:none'></h2>
    </div>
    <div id='responses' style='display:none'>
      <ul>
        <li><button @click='goBack()'>Back</button></li>
        <!-- <li><button @click='tellMore()'>Cool! Tell me more</button></li> -->
        <!-- <li><button @click='beef()'>Yea right! Show me the Beef</button></li> -->
      </ul>
    </div>
    </div>
    <footer>
      <a href='https://www.linkedin.com/in/addyson-hangstefer-1081b7168?original_referer=https%3A%2F%2Fduckduckgo.com%2F'>My Linkedin</a>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      catFacts: [
        'When cats climb a tree, they cant go back down it head first. This is because their claws are facing the same way, instead, they have to go back down backward.',
        'A group of cats is called a clowder.',
        'A cat kneading is an act of contentment and adoration.', 'Both cats and humans have identical regions in the brain responsible for emotion.',
        'Cats sleep an average of 15 hours a day.'
      ],
      dogFacts: [
        'A dogs nose print is unique, much like a persons fingerprint.',
        'The name Collie means black. (Collies once tended black-faced sheep.)',
        'There are over 75 million pet dogs in the U.S. more than in any other country.',
        'All puppies are born deaf.'
      ],
      goatFacts: [
        'Goats don’t graze on grass. Get a goat to clean up the grass of your beautiful lawn and it will devour all the shrubs but grass! This is because they are browsers and they prefer eating fruits, shoots, leaves, shrubs and plants.',
        'It is a popular belief that goats eat tin cans. Thats not true. Because they are browsers, they end up chewing anything that distantly looking like wooden vegetation and plants and these include labels on tin cans, paper and cardboard boxes.',
        'Goats are pretty good swimmers!',
        'Goats have little appendages of flesh hanging from their neck called wattles.'
      ]
    }
  },
  computed: {
  },
  methods: {
    showGameplay: function () {
      document.getElementById('gamePlay').style.display = 'block'
      document.getElementById('intro').style.display = 'none'
    },
    explain: function () {
      alert('Click a topic to read a fun fact.')
    },
    goBack: function () {
      document.getElementById('topics').style.display = 'block'
      document.getElementById('fact').style.display = 'none'
      document.getElementById('responses').style.display = 'none'
      document.getElementById('gameTop').style.display = 'block'
    },
    catFact: function () {
      var randomFact = this.catFacts[Math.floor(Math.random() * this.catFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    dogFact: function () {
      var randomFact = this.dogFacts[Math.floor(Math.random() * this.dogFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    goatFact: function () {
      var randomFact = this.goatFacts[Math.floor(Math.random() * this.goatFacts.length)]
      document.getElementById('fact').innerHTML = '<h3 style=text-decoration:underline>Did you know:</h3>' + randomFact
      document.querySelector('.explainButton').style.display = 'none'
      document.getElementById('topics').style.display = 'none'
      document.getElementById('responses').style.display = 'block'
      document.getElementById('fact').style.display = 'block'
      return randomFact
    },
    beef: function () {
      alert('There is no beef! In fact go find your own beef OK!')
    },
    tellMore: function () {
      alert('Still working on this option.')
      // I want to eventually have this button be clicked and reload whatever topic is active to give a new fun fact.
    }
  }
}
</script>
<style>
.home{
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: 100vh;
  margin:0px;
  background-color: lightblue;
  position: static;
  margin-bottom: 50px;
}

.card{
  width: 18rem;
  margin: auto;
  padding: 10px;
  box-shadow: 3px 3px 3px;
  text-align: center;
}

#gameTop{
  margin: 70px 20px;
  text-align: center;
}

.categoryTitle{
  text-decoration: underline;
}

.animate-text{
  text-transform: uppercase;
    font-weight: 900;
    background-image:linear-gradient(
        -225deg,
        #3e2989 0%,
        #8736de 29%,
        #3313ff 67%,
        #153cdb 100%
    );
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    /* display: inline-blocks; */
    font-size: 90px;
}
@keyframes textclip {
    to {
        background-position: -200% center;
    }
}
ul{
  list-style: none;
  padding: 0;
  text-align: center;
}
  ul li{
    padding-bottom: 10px;
  }
  #responses ul li{
    display: inline-block;
    margin: 20px 10px;
  }
  footer{
    position:fixed;
    bottom:0;
    background-color: rgb(24, 24, 78);
    width:100%;
    height:50px;
    bottom:0;
    left:0;
    text-align: center;
    padding:15px;
  }
</style>
