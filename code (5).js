public static void main(String[] args) {
  
  int laenge = 50;
  
  long[] fibonacci = new long[laenge];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  
  for(int i = 2; i < laenge;  i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    
    for(int i =0; i < fibonacci.length;  i++){
      System.out.println(fibonacci[i] + ", ");
      
      public class RecursiveFibonacciSequence {
        
        public static void main(String[] args) {
          int x = getFibonacciNumberAt(5); //5
          System.out.println(x);
        }
      public state int getFibonacciNumberAt(int n) {
        if (n<2) {
          return n;
        }else 
          return getFibonacciNumberAt (n - 1) + getFibonacciNumberAt (n-2)
      }
    }
    
      