## compute_input.py

import sys, json, numpy as np

#Read data from stdin

def main():
    #get our data as an array from read_in()
    #lines = read_in()

    #create a numpy array
    #np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    #lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    arg1 = sys.argv[1] #value1
    arg2 = sys.argv[2] #value2
    arg3 = sys.argv[3] #value3
    print arg1 + arg2 + arg3

#start process
if __name__ == '__main__':
    main()