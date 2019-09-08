class Stack 
    attr_reader :arr 
    def initialize
        @arr = []
    end 

    def push(el)
        arr.push(el)
    end 

    def pop
        arr.pop 
    end 

    def peek
        arr[-1]
    end 
end 


class Queue
    attr_reader :arr 

    def initialize
        @arr = []
    end 

    def enqueue(el)
        arr.push(el) 
    end 

    def dequeue
        arr.shift
    end 

    def peek 
        arr[0]
    end 
end 


class Map
    attr_reader :arr
    def initialize
        @arr = Array.new
    end 

    def set(key, value) 
        arr.each do |subArr| 
            if subArr[0] == key 
                subArr[1] = value 
                return true 
            end 
        end 
        arr << [key, value]
        true
    end 

    def get(key)
        arr.each do |subArr| 
            return subArr[1] if subArr[0] == key 
        end 
        nil
    end 

    def delete(key)
        arr.each_with_index do |subArr, i| 
            if subArr[0] == key 
                arr.delete_at(i) 
                return true
                break 
            end 
        end 
        return false
    end 

    def show
        arr
    end 
end 