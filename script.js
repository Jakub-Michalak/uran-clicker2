//starting values
var lifetimeW = 0;
var lifetimeUpgrades = 0;
var currentW = 0;
var idlePower = 0;
var cursorPower = 1;
var cheater = 0;
var marcinFlag = 0;
var option = "upgrades";
var theme = "discord";
var achievement = new Array(0,0,0,0,0);


function saveGame(){
  localStorage.lifetimeW = lifetimeW;
  localStorage.lifetimeUpgrades = lifetimeUpgrades;
  localStorage.currentW = currentW;
  localStorage.idlePower = idlePower;
  localStorage.cursorPower = cursorPower;
  localStorage.cheater = cheater;
  localStorage.marcinFlag = marcinFlag;
  localStorage.option = option;
  localStorage.theme = theme;

  localStorage.KopalniaKociolkow_quantity = KopalniaKociolkow.quantity;
  localStorage.KopalniaKociolkow_cost = KopalniaKociolkow.cost;
  localStorage.KopalniaKociolkow_multiplier = KopalniaKociolkow.multiplier;
  localStorage.KopalniaKociolkow_baseIdlePower = KopalniaKociolkow.baseIdlePower;

  localStorage.WebmNitka_quantity = WebmNitka.quantity;
  localStorage.WebmNitka_cost = WebmNitka.cost;
  localStorage.WebmNitka_cursorPower = WebmNitka.cursorPower;

  localStorage.Crackowiaczek_quantity = Crackowiaczek.quantity;
  localStorage.Crackowiaczek_cost = Crackowiaczek.cost;
  localStorage.Crackowiaczek_multiplier = Crackowiaczek.multiplier;
  localStorage.Crackowiaczek_baseIdlePower = Crackowiaczek.baseIdlePower;
  //zapisywanie acziwmentow
}

function loadGame(){
  if(localStorage.getItem("cursorPower") == null){
    //alert("brak zapisu do zaladowania.");
  }
  else{
    option = localStorage.option;
    changeTheme(localStorage.theme);
    lifetimeW = parseInt(localStorage.lifetimeW);
    lifetimeUpgrades = parseInt(localStorage.lifetimeUpgrades);
    currentW = parseInt(localStorage.currentW);
    idlePower = parseInt(localStorage.idlePower);
    cursorPower = parseInt(localStorage.cursorPower);
    cheater = parseInt(localStorage.cheater);
    marcinFlag = parseInt(localStorage.marcinFlag);

    KopalniaKociolkow.quantity = parseInt(localStorage.KopalniaKociolkow_quantity);
    KopalniaKociolkow.cost = parseInt(localStorage.KopalniaKociolkow_cost);
    KopalniaKociolkow.multiplier = parseInt(localStorage.KopalniaKociolkow_multiplier);
    KopalniaKociolkow.baseIdlePower = parseInt(localStorage.KopalniaKociolkow_baseIdlePower);

    WebmNitka.quantity = parseInt(localStorage.WebmNitka_quantity);
    WebmNitka.cost = parseInt(localStorage.WebmNitka_cost);
    WebmNitka.cursorPower = parseInt(localStorage.WebmNitka_cursorPower);

    Crackowiaczek.quantity = parseInt(localStorage.Crackowiaczek_quantity);
    Crackowiaczek.cost = parseInt(localStorage.Crackowiaczek_cost);
    Crackowiaczek.multiplier = parseInt(localStorage.Crackowiaczek_multiplier);
    Crackowiaczek.baseIdlePower = parseInt(localStorage.Crackowiaczek_baseIdlePower);
  }
}

var saveFile = [{
  lifetimeW: localStorage.lifetimeW,
  lifetimeUpgrades: localStorage.lifetimeUpgrades,
  currentW: localStorage.currentW,
  idlePower: localStorage.idlePower,
  cursorPower: localStorage.cursorPower,
  cheater: localStorage.cheater,
  marcinFlag: localStorage.marcinFlag,
  option: localStorage.option,
  theme: localStorage.theme,

  KopalniaKociolkow_quantity: localStorage.KopalniaKociolkow_quantity,
  KopalniaKociolkow_cost: localStorage.KopalniaKociolkow_cost,
  KopalniaKociolkow_multiplier: localStorage.KopalniaKociolkow_multiplier,
  KopalniaKociolkow_baseIdlePower: localStorage.KopalniaKociolkow_baseIdlePower,

  WebmNitka_quantity: localStorage.WebmNitka_quantity,
  WebmNitka_cost: localStorage.WebmNitka_cost,
  WebmNitka_cursorPower: localStorage.WebmNitka_cursorPower,

  Crackowiaczek_quantity: localStorage.Crackowiaczek_quantity,
  Crackowiaczek_cost: localStorage.Crackowiaczek_cost,
  Crackowiaczek_multiplier: localStorage.Crackowiaczek_multiplier,
  Crackowiaczek_baseIdlePower: localStorage.Crackowiaczek_baseIdlePower
}];

function deleteSaveFile(){
  if(confirm('Czy na pewno chcesz usunąć zapis?')){
    localStorage.clear();
    location.reload();
    alert("Zresetowano postęp.");
  }
}

function downloadSaveFile(){
  saveGame();
  var saveDump = new Blob([JSON.stringify(saveFile)])
    var url = window.URL.createObjectURL(saveDump);
    window.location.assign(url);
}

function changeFeature(option){
$(".icon").css("border", "0px");
$(".icon").css("border-radius", "50px");
$("#feature").load("features/" + option + ".html");
$("#icon_" + option).css("border", "2px solid");
$("#icon_" + option).css("border-radius", "10px");
}

function markCurrentTheme(){
  $(".theme").css("border-style", "double");
  $("#theme_"+theme).css("border-style", "solid");
}

function enableTheme(chosen){
  chosen.rel = 'stylesheet';
}

function disableTheme(chosen){
  if(chosen=='discord')discord.rel = 'alternate stylesheet';
  if(chosen=='skype')skype.rel = 'alternate stylesheet';
  if(chosen=='gadugadu')gadugadu.rel = 'alternate stylesheet';
  if(chosen=='anime')anime.rel = 'alternate stylesheet';
  if(chosen=='marcin')marcin.rel = 'alternate stylesheet';
}

function changeTheme(chosen){
  $(".theme").css("border-style", "solid");
  disableTheme(theme);
  if(chosen=='discord'){theme='discord'; enableTheme(discord);}
  if(chosen=='skype'){theme='skype'; enableTheme(skype);}
  if(chosen=='gadugadu'){theme='gadugadu'; enableTheme(gadugadu);}
  if(chosen=='anime'){theme='anime'; enableTheme(anime);}
  if(chosen=='marcin'){theme='marcin'; enableTheme(marcin);}
  markCurrentTheme();
}

function formatNumber(num){
  return num.toLocaleString(undefined);
}

function notification(line1,line2){
  var myNotification = new Notify(line1, {
    body: line2,
    icon: 'favicon.ico'
  });
  if (!Notify.needsPermission) {
    myNotification.show();
  } else if (Notify.isSupported()) {
    Notify.requestPermission(onPermissionGranted, onPermissionDenied);
  }

  function onPermissionGranted() {
  	console.log('Permission has been granted by the user');
  	myNotification.show();
  }

  function onPermissionDenied() {
  	console.warn('Permission has been denied by the user');
  }

}

function achievementCheck(){
  if(marcinFlag==1)$("#theme_marcin").css("visibility", "visible");
  if(idlePower >= 100)achievement1.unlock();
  if(lifetimeW >= 1000000)achievement2.unlock();
  if(lifetimeW >= 2000000)achievement3.unlock();
  if(lifetimeW >= 2147483647){achievement4.unlock();$("#theme_skype").css("visibility", "visible");}
}

function refresh(){
  $("#wCounter").html(formatNumber(currentW) + "₩");
  achievementCheck();
}

function incomeRefresh(){
  $("#idlePower").html(idlePower);
  $("#cursorPower").html(cursorPower);
}

function statRefresh(){
  $("#lifetimeW").html(formatNumber(lifetimeW) + "₩");
  $("#lifetimeUpgrades").html(formatNumber(lifetimeUpgrades));
  if(cheater == 1)$("#cheatNotice").html("„Pan jest nic więcej jak oszust, Panie Boczek.”");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function autoSave(){
    while(true){
      await sleep(60000);
      saveGame();
    }
}

async function idleIncome(){
  while(true){
    currentW=currentW+idlePower;
    lifetimeW=lifetimeW+idlePower;
    refresh();
    await sleep(1000);
  }
}

async function statRefreshing(){
  while(true){
    statRefresh();
    await sleep(1000);
  }
}

function klik(){
  currentW = currentW + cursorPower;
  lifetimeW = lifetimeW + cursorPower;
  refresh();
}

function grantW(quantity){
  cheater = 1;
  currentW = currentW + quantity;
  lifetimeW = lifetimeW + quantity;
  refresh();
}

class Achievement{
  constructor(id,flag,name,quotation,description,image){
    this.id = id;
    this.flag = flag;
    this.name = name;
    this.quotation = quotation;
    this.description = description;
    this.image = image;
  }
  unlock(){
    if(this.flag==0){
      this.flag=1;
      $("#achievementImage"+this.id).css("filter", "grayscale(0%)");
      $("#achievementImage"+this.id).css("border", "2px solid white");
      $("#achievementImage"+this.id).css("border-radius", "10px");
      notification("Odblokowano osiągnięcie!", this.name);
    }
  }
  infoPush(){
    $("#achievementName"+this.id).html(this.name);
    var imagehelp = "url("+this.image+")";
    $("#achievementImage"+this.id).css("background-image", imagehelp);
    $("#achievementQuotation"+this.id).html(this.quotation);
    $("#achievementDescription"+this.id).html(this.description);
    if(this.flag==1){
      $("#achievementImage"+this.id).css("filter", "grayscale(0%)");
      $("#achievementImage"+this.id).css("border", "2px solid white");
      $("#achievementImage"+this.id).css("border-radius", "10px");
    }
  }
}
var achievement1 = new Achievement(1,0,"Niedziela wieczur","I humor popsuty...","Wysyłaj 100 wiadomości na sekundę.","images/achievements/1.png");
var achievement2 = new Achievement(2,0,"Pierwszy milion trzeba ukraść","Pożycz od kolegi, nie daj zarobić twórcom"," Wyślij łącznie 1,000,000 wiadomości.","images/achievements/2.png");
var achievement3 = new Achievement(3,0,"Drugi też","Aha spoko, nieźle się postarał nad wymyślaniem tych osiągnięć","Wyślij łącznie 2,000,000 wiadomości.","images/achievements/3.png");
var achievement4 = new Achievement(4,0,"Wystąpił problem z aplikacją Skype.exe","Nie wysyłaj","Wyślij łącznie 2,147,483,647 wiadomości.<br /><br /><i>Odblokowuje motyw Skype</i>","images/achievements/4.png");

class Upgrade {
  constructor(id,name,description,image,cost,cursorPower,baseIdlePower,quantity,costMultiplier,multiplier){
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.cost = cost;
    this.cursorPower = cursorPower;
    this.baseIdlePower = baseIdlePower;
    this.idlePower = idlePower;
    this.quantity = quantity;
    this.costMultiplier = costMultiplier;
    this.multiplier = multiplier;
  }
  buyUpgrade(){
    if(currentW>=this.cost){
      currentW = currentW - this.cost;
      this.quantity=this.quantity+1;
      lifetimeUpgrades=lifetimeUpgrades+1;
      this.cost = Math.ceil(this.cost * this.costMultiplier);
      refresh();
      this.calculateIncome();
      this.upgradeInfoRefresh();
      incomeRefresh();
    }
  }
  upgradeInfoRefresh(){
      $("#upgradeName" + this.id).html(this.name);
      $("#upgradeCost" + this.id).html(formatNumber(this.cost));
      $("#upgradeDescription" + this.id).html(this.description);
      $("#upgradeQuantity" + this.id).html(this.quantity);
      var imagehelp = "url("+this.image+")";
      $("#upgradeImage"+this.id).css("background-image", imagehelp);
      $("#upgradeIdlePower"+this.id).html(this.idlePower);
      $("#upgradeCursorPower"+this.id).html(this.cursorPower);
    }
    calculateIncome(){
      if(this.id==1){
        if(this.quantity==50)this.multiplier = this.multiplier*2;
        idlePower=idlePower-this.idlePower;
        this.baseIdlePower=this.baseIdlePower+1;
        this.idlePower=this.baseIdlePower*this.multiplier;
        idlePower=idlePower+this.idlePower;
      }
      if(this.id==2){
        cursorPower=cursorPower-this.cursorPower;
        this.cursorPower=this.cursorPower+1;
        cursorPower=cursorPower+this.cursorPower;
      }
      if(this.id==3){
        if(this.quantity==10)this.multiplier = this.multiplier*2;
        idlePower=idlePower-this.idlePower;
        this.baseIdlePower=this.baseIdlePower+25;
        this.idlePower=this.baseIdlePower*this.multiplier;
        idlePower=idlePower+this.idlePower;
      }
    }
}
var KopalniaKociolkow = new Upgrade(1,'Kopalnia Kociołków','Tylko głupiec nazwał by to rtęcią. My tu wydobywamy kociołki.','images/upgrades/kopalniakociolkow.png',10,0,0,0,1.15,1);
var WebmNitka = new Upgrade(2,'Nitka WebMów','najlepszywebm.webm.mp4','images/upgrades/webmnitka.png',100,0,0,0,1.25,1);
var Crackowiaczek = new Upgrade(3,'Crackowiaczek','No to odpalamy i gramy, mamma mia chcę grać kunari.','images/upgrades/crackowiaczek.png',10000,0,0,0,1.33,1);
