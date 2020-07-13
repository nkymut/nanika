/*

*/

// the setup function runs once when you press reset or power the board
const int ledPin = 10;
const int motorPin = 3;
const int numPins = 2;
const int pins[] = {ledPin,motorPin};

int dutyTime = 10000;
double dutyRatio = 0.25;

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  for(int i = 0; i <numPins; i++){
   pinMode(pins[i], OUTPUT);
  }
  digitalWrite(motorPin,HIGH);
  delay(100);
  analogWrite(motorPin,80);

  Serial.begin(9600);
}



// the loop function runs over and over again forever
void loop() {

    // check if data has been sent from the computer:
  if (Serial.available()) {
    dutyRatio = Serial.parseFloat();
    Serial.println(dutyRatio); 
  }else{
    float val = analogRead(0) / 1024.0;
    if(val != dutyRatio){
      dutyRatio = val;
//             Serial.print(dutyTime * dutyRatio); 
//             Serial.print(",");
//       Serial.println(dutyRatio); 
    }    
  }
  
  digitalWrite(motorPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  //delayMicroseconds(dlength*dduty);                       // wait for a second
  delayMicroseconds(dutyTime * dutyRatio);                       // wait for a second

  digitalWrite(motorPin, LOW);   // turn the LED on (HIGH is the voltage level)
  
  //delayMicroseconds(dlength*(1-dduty));                       // wait for a second
  delayMicroseconds(dutyTime * (1- dutyRatio));                       // wait for a second

}
//
//// the loop function runs over and over again forever
//void loop() {
//
//    // check if data has been sent from the computer:
//  if (Serial.available()) {
//    dutyRatio = Serial.parseFloat();
//    Serial.println(dutyRatio); 
//  }else{
//    float val = analogRead(0) / 1024.0;
//    if(val != dutyRatio){
//      dutyRatio = val;
//       Serial.println(dutyRatio); 
//    }    
//  }
//  
//  digitalWrite(motorPin, HIGH);   // turn the LED on (HIGH is the voltage level)
//  //delayMicroseconds(dlength*dduty);                       // wait for a second
//  delay(dutyTime * dutyRatio);                       // wait for a second
//
//  digitalWrite(motorPin, LOW);   // turn the LED on (HIGH is the voltage level)
//  
//  //delayMicroseconds(dlength*(1-dduty));                       // wait for a second
//  delay(dutyTime * (1- dutyRatio));                       // wait for a second
//
//}
