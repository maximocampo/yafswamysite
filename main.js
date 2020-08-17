const words = document.getElementById('words');

const doc = 'aragrams recrementitial prejudicial wallets coversed dieing retrocognition bastn asites doffed photosensitizers disputants facedowns corporealises knightage pros eminar serger onychiums switchyards viverrines humdrumnesses ricinoleic artfully tautness affeared vindaloo caprolactams bohos thermodynamical ghoul labialized pigeoned substracted autocratically footbreadth repugnant milligram coracle swip ples neighborlinesses schmaltziest numerators vaingloriously unblindfolded backb itings twizzle booby taxation neotropics chalazions styted undersleeves mo mayor alties crepusculous epiphragms glairiest hepatomegalies theaters appetising fibr illa borming dentists redders nonlinearities nonequivalents distastefulnesses in gulfments increasers thaneships clarinets linos workwatchers pylori palmie wrick ed khakilike blowings waterworks benomyl unsent bestir impassioned thrombogens g uardships logy endocytosises witheringly tetras girnel alienates grudgeful olest ras clamantly minstrels wristwatch nonmembership abaft apheliotropism reprivatiz ation mongs alicyclic campstool sasquatches cannabinols immortalising imbossed m icropower enthusiastic tempuras celebrated bole trampette givennesses sab subcul ture dock jambone rustlingly ahchoo carious napalms restauranteurs pinken lisent e earlywoods racepaths curny pneumaticity factionaries unemphatically limitlessn esses restriving kamelas humanize pyrotechnically unification irising gamins lim bus titanosaur haemangiomata kinderspiel witnesses matins tallents presifting me lanophores deflations rowmes grasshopper inscribableness sporozoans administrato r somniloquous intercrosses yaf swamy enranked modification tagliarinis drives b abblers eternal kishka remanence elutriated lixivial suberises broads fuggily cu ss clearheaded ecotages dunnies unroosted repudiated nitwittery kinesthesis dema in shitface postpositives unmercifulness mountebankeries sillies agenizes invigo rants schematics porose moonports enewed daydreamers cogitates conspiracies over exposes nailery caddie howsoever gabapentin outsized electrocardiographs grimalk in attendances boneshaker incrassate enfreezes braccia ouakaris fashioner ericas shikar yeti spreazed spighted neurocoeles tsarinas serry wonderkid tabling crim ps nervier militia tompions hourglass unlikelinesses semimanufacture teleostomou s bastardism envisions arling wan sirings pressings gesneriads readjuster kleene xes barraging erotomania outhowling preceded phantasime oscitantly rigidized ret ape peevishness picowaves dackering woodgrouses hyphening hammerer bookstands ut opianism fugginesses progresses patibulary objectivated klondyking sleepiest bla ubok stripeless cohibited sanatory transnationalisms platinizes aunthood referra l recleans kilowatts minuets glasnostic castories ancienter hypaethrons suetier phonographic aurar monospermous silversmith gerontophobias asea shannies loggias shunner thirteens tele lungfish buttonholing legators negs maranathas monochlor ides cudgerie passable restudying floorshows eyeable benzoquinones cocainisation repleaders overproduce enallages rosemaling tussors melodramatic esne triarch s prechery broekies touristed jagra protopathic grasshopper angiocardiographies a;';

function IntervalTimer(callback, interval) {
  var timerId, startTime, remaining = 0;
  var state = 0; //  0 = idle, 1 = running, 2 = paused, 3= resumed
  
  this.pause = function () {
    if (state != 1) return;
    
    remaining = interval - (new Date() - startTime);
    window.clearInterval(timerId);
    state = 2;
  };
  
  this.resume = function () {
    if (state != 2) return;
    
    state = 3;
    window.setTimeout(this.timeoutCallback, remaining);
  };
  
  this.timeoutCallback = function () {
    if (state != 3) return;
    
    callback();
    
    startTime = new Date();
    timerId = window.setInterval(callback, interval);
    state = 1;
  };
  
  startTime = new Date();
  timerId = window.setInterval(callback, interval);
  state = 1;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}

let wordlist = doc.split(' ');



const int = new IntervalTimer(() => {
    words.innerHTML = '';
    const shuffled = shuffle(wordlist);
  
    return shuffled.forEach((word, i) => {
      const span = document.createElement('span');
      span.innerHTML = word + ' ';
      span.onmouseenter = () => {
        int.pause()
        span.innerHTML = '<b>yaf swamy</b> ';
      }
      span.onmouseleave = () => {
        int.resume()
        span.innerHTML = word + ' ';
      }
    
      words.appendChild(span)
    });

  //words.innerHTML = ''
  //const shuffled = shuffle(wordlist)
//
  //shuffled.forEach(word => {
  //  const span = document.createElement('span');
  //  span.innerHTML = word + ' ';
  //  //span.onmouseenter = () => span.innerHTML = '<b>yaf swamy</b> ';
  //  //span.onmouseleave = () => span.innerHTML = word + ' ';
  //
  //  words.appendChild(span)
  //});
}, 100);




