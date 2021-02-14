import tram from './assets/tram.gif';
import thought from './assets/thought.png';
import './App.scss';



function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={tram} className="header_bg" alt="train" />
        <div className="header_bar">
        </div>
      </div>
      <div className="centered_rel">
        <div className="newspaper">
          <div className="newspaper__line newspaper__line--t" />
          <div className="newspaper__icon">
            <svg>
              <use href="./giraffe.svg#giraffe"></use>
            </svg>
          </div>
          <div className="newspaper__title">
            <h1>The Fucking Trains</h1>
            {/* <h2>A valentine for Vi</h2> */}
          </div>
          <div className="newspaper__date">
            Feb 14th 2021
          </div>
          <div className="newspaper__line newspaper__line--b" />
          <div className="main-article article">
            <h1>Boy can't stop thinking about amazing girl</h1>
            <img className="thought" src={thought} alt="<3 VI" />
            <p className="lead">Canadian boy admits he dearly misses Violeta, a beautiful spanish girl he met on a rooftop back in 2019. "I hope she's doing well. It's been a long time since we've seen eachother, so i'm always wondering what she's up to."</p>
            <p>The pair had plans of existing together in Amsterdam this year that got derailed by a stupid ass pandemic. With distance and unanswered questions, they started to drift apart until the boy no longer knew what Violeta was feeling.</p>
            <p>"I get so lost in my mind sometimes. We talked on the phone in September and decided to drift until the pandemic was over. I can imagine us drifting through space but we're so far apart. I long for a day when our space paths cross again."</p>
            <p>Not knowing when their paths may cross again, the pair communicates rarely. Regardless, the boy's heart continues to sing a song for the girl. Waiting for the day they might reunite.</p>
          </div>
          <div className="happy">
            <h1>Happy Valentines Day! ❤️</h1>
            <p>Heeeeeeyyyy Vi! Certainly been missing you ʕっ• ᴥ • ʔっ</p>
            <p>I hope you are doing well in Amsterdam with UvA / jazz band / life. Don't forget you are a beautiful human :p </p>
          </div>
          <div className="love">
            <h1>A love poem</h1>
            <p>My heart hurts.</p>
            <p>Not the same as before.</p>
            <p>It hurts different:</p>
            <p>out of confusion no longer,</p>
            <p>but instead at the core.</p>
            <br/>
            <p>I know that I love you</p>
            <p>but don't know how to love.</p>
            <p>I know that I want you</p>
            <p>push come to shove.</p>
            <p>There isn't a person i've met quite like you</p>
            <p>Out of 10 billion, noone else will do.</p>
            <p>You're a flower, a path, a marathon ribbon</p>
            <p>a shower, a laugh, that much is given.</p>
            <br/>
            <p>Imagine defined, a life laid ahead</p>
            <p>with iced coffees, and you in a bed.</p>
            <p>Together explore, the cosmos, the trittens</p>
            <p>Chaos ensues, that much is given.</p>
            <br/>
            <p>my heart hurts cause there's a girl out there</p>
            <p>with love in her eyes, and flowers in her hair</p>
          </div>
          <div className="memories">
            <h1>Memories con la Vi</h1>
            <ul>
              <h2>Crazy</h2>
              <li>Climbing on top of a cliff during camino del Cares. Honestly still a holy fuck when I think about this again 😂</li>
              <li>Bicycling together through the streets of Toronto</li>
              <li>That time security rolled up on us at 5am</li>
              <li>Meeting Ryan's grandpa at the dog saloon / running down that big ass hill. (Your roommates telling security you were missing)</li>
              <h2>Cute</h2>
              <li>Mooned me on the beach of La Franca</li>
              <li>Stealth snowball attack when I was walking back from class</li>
              <li>All the times you tippy toe kissed me ❤️</li>
              <li>Happy forest Vi (walking together, sitting in parks)</li>
              <h2>Stupid</h2>
              <li>When I wouldn't shutup about una hamburguesa</li>
              <li>The girls taking selfies while I was naked in a river</li>
              <li>The people that passionately talked about food for hours</li>
              <li>Re-arranging your families house multiple times</li>
              <h2>Thankful</h2>
              <li>When you saved our lives driving</li>
              <li>The music you've shown me</li>
              <li>Films we've shared (ghibli, fantasia 2000)</li>
              <li>The night we met</li>
              <h2>Love</h2>
              <li>When you calmed me down (river and also Wycik). You have no idea the positive impact you had on me here</li>
              <li>Cuddling you / hugging you</li>
              <li>Existing near you</li>
              <li>Kissing you</li>
              <li>Exploring the world together</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
