require "set"

class GraphNode 
    attr_reader :value, :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end 


    def neighbors=(array) 
        @neighbors += array
    end 
end 


def bfs(starting_node, target_value)
    queue = [starting_node] 
    visited = Set.new 
    
    until queue.empty? 
        current = queue.shift 
        return nil if visited.include?(current)
        
        visited << current 
        return current if current.value == target_value 
        current.neighbors.each { |nb| queue << nb } 
    end 
    nil
end 



a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, "b")
p bfs(a, "f")