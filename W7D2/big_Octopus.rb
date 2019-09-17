
#A Very Hungry Octopus wants to eat the longest fish in an array of fish.

#['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
#=> "fiiiissshhhhhh"
fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

#-------------------------------------------------------------------------------

# Sluggish Octopus => O(n^2)
def sluggish(fish_array)
    longest = nil 
    fish_array.each_with_index do |fish1, idx1| 
        temp = fish_array.dup
        temp.delete_at(idx1) 
        temp.each do |fish2| 
            if fish2.length > fish1.length 
                longest = fish2
            end 
        end 
    end 
    longest 
end 

# p sluggish(fishes)
# p sluggish(fishes.length)

#-------------------------------------------------------------------------------

# Dominant Octopus => O(n log n)

def dominant(fish_array)
    pivot = fish_array[0] 
    left = fish_array[1..-1].select { |fish| fish.length < pivot.length }
    right = fish_array[1..-1].select {|fish| fish.length > pivot.length } 
    if right.empty? 
        return pivot 
    else  
        dominant(right)
    end 
end 
# p dominant(fishes)

#-------------------------------------------------------------------------------

# Clever Octopus => O(n) 

def clever(fish_array)
    longest = fish_array[0] 
    (1...fish_array.length).each do |i| 
        temp_fish = fish_array[i] 
        if longest.length < temp_fish.length 
            longest = temp_fish 
        end 
    end 
    longest 
end 
# p clever(fishes)

#-------------------------------------------------------------------------------

# Dancing Octopus 

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]


# Slow Dance: 
def slow_dance(move, arr)
    arr.each_with_index do |tile, idx| 
        return idx if tile == move  
    end 
end 
# p slow_dance("up", tiles_array) #=> 0
# p slow_dance("right-down", tiles_array) #=> 3

#-------------------------------------------------------------------------------

# Constant Dance!:

new_tiles_data_structure = Hash.new 

tiles_array.each_with_index do |tile, idx| 
    new_tiles_data_structure[tile] = idx 
end 


def fast_dance(move, data_structure) 
    data_structure[move]
end 

# p fast_dance("up", new_tiles_data_structure) #=> 0
# p fast_dance("right-down", new_tiles_data_structure) #=> 3 


