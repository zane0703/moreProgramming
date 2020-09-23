import java.util.ArrayList;
import java.util.Scanner;
public class EvenUp {
public static void main(String[] args){
	Scanner scanner = new Scanner(System.in);
    int n=0;
    while(true){
    	try {
        n= Integer.parseInt(scanner.nextLine());
        if(n>=1&&n<=100000 ){
            break;	
        }else {
        	System.err.println("M must be between 1 to 100000");
        }
        
    	}catch(NumberFormatException e) {
    		System.err.println("input must be a number");
    	}
    	}
    ArrayList<Integer> l =new ArrayList<Integer>();
    while(true) {
    	try {
    		String[] inputs= scanner.nextLine().trim().split(" ");
        	if(inputs.length==n) {
        		for(String input:inputs) {
        			l.add(new Integer(input));
        		}
        		while(true) {
        			boolean noRemove=true;
        			int i = l.size()-1;
        			while(0<i) {
        				if((l.get(i)+l.get(--i))%2==0) {
        					l.remove(i+1);
        					l.remove(i);
        					--i;
        					noRemove =false;
        				}
        			}
        			if(noRemove) {
        				break;
        			}
        		}
        		break;
        	}else {
        		System.err.println("Must have "+n+" inputs");
        	}
    	}catch(NumberFormatException e) {
    		System.err.println("input must be a number");
    	}

    }
    System.out.println(l.size());
    scanner.close();
}

}
