// NeoPixel Ring simple sketch (c) 2013 Shae Erisson
// Released under the GPLv3 license to match the rest of the
// Adafruit NeoPixel library

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        13 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 6 // Popular NeoPixel ring size

// FET Drive LED pins
const int pinR = 10;
const int pinG = 11;
const int pinB = 12;
const int pins[] = {pinR, pinG, pinB};

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// When setting up the NeoPixel library, we tell it how many pixels,
// and which pin to use to send signals. Note that for older NeoPixel
// strips you might need to change the third parameter -- see the
// strandtest example for more information on possible values.
Adafruit_NeoPixel pixelsBG(10, 11, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500 // Time (in milliseconds) to pause between pixels

int colors[4][3] = {{255, 0, 0}, {0, 255, 0}, {0, 0, 255},{255, 255, 255}};
int colorFG = 0;
int colorBG = 0;
int numColors = 4;

void setup() {

  // initialize digital pin LED_BUILTIN as an output.
  for (int i = 0; i < 3; i++) {
    pinMode(pins[i], OUTPUT);
  }
  for (int i = 0; i < 3; i++) {
    digitalWrite(pins[i], HIGH);   // turn the LED on (HIGH is the voltage level)
  }

  
  // These lines are specifically to support the Adafruit Trinket 5V 16 MHz.
  // Any other board, you can remove this part (but no harm leaving it):
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif
  // END of Trinket-specific code.

  pixels.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
  pixelsBG.begin(); // INITIALIZE NeoPixel strip object (REQUIRED)
}

void loop() {
  // pixels.clear(); // Set all pixel colors to 'off'

  for(colorBG = 0; colorBG < numColors; colorBG++ ){
     pixelsBG.fill(pixels.Color(colors[colorBG][0], colors[colorBG][1], colors[colorBG][2]));
     pixelsBG.show();   // Send the updated pixel colors to the hardware.
     for(colorFG = 0; colorFG < numColors; colorFG++ ){
      pixels.fill(pixels.Color(colors[colorFG][0], colors[colorFG][1], colors[colorFG][2]));
      pixels.show();   // Send the updated pixel colors to the hardware.
      
      delay(DELAYVAL); // Pause before next pass through loop
     }
  }
    
   
  
  

}
