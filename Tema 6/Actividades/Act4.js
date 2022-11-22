class Computer{
  
  brand;
  model;
  ram;
  hdd;
  screen;

  constructor(brand, model, ram = 4, hdd = 256, screen = 17){
    this.brand = brand;
    this.model = model;
    this.ram = ram;
    this.hdd = hdd;
    this.screen = screen;

  }

  toString(){
    console.log(`Brand: ${this.brand}
    Model: ${this.model}
    Ram ${this.ram} GB
    HDD ${this.hdd} GB
    Screen ${this.screen} inches`);
  }

}

class Laptop extends Computer{
  autonomy;
  screen;
  hdd;
  constructor(autonomy = 4, screen = 14, hdd = 256){
    super(screen, hdd);
    this.autonomy = autonomy;
  }

  toString(){
    console.log(`Brand: ${this.brand}
    Model: ${this.model}
    Ram ${this.ram} GB
    HDD ${this.hdd} GB
    Screen ${this.screen} inches
    Autonomy ${this.autonomy} autonomy`);
  }

}

const pc1 = new Computer("hp", "model 2");
pc1.toString();

const lap1 = new Laptop(8,20,1000);
lap1.toString();