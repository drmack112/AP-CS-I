public class BinaryExplorer 
{

    public static void main(String[] args) {
        int[] testArray = {3, 6, 12, 18, 24, 34, 54, 64, 87, 100};

        binaryRec(testArray, 87, 0, testArray.length - 1);

    }

    /**
     * Add Print statements to the binaryRec method:
     * 
     * Print Starting, ending, and midpoint values.
     * 
     * Print when you find a match
     * 
     * Print if you are too high or too low.
     * 
     **/
    public static int binaryRec(int[] array, int target, int begin, int end) {
        if (begin <= end)
        {
            
            int mid = (begin + end) / 2;
        
            
            // Base Case
            if (target == array[mid]) {
                return mid;
            }
    
            if (target < array[mid]) {
                return binaryRec(array, target, begin, mid - 1);
            }
    
            if (target > array[mid]) {
    
                return binaryRec(array, target, mid + 1, end);
            }
        }
        return -1; //Alternate Base Case - not found
    }
}