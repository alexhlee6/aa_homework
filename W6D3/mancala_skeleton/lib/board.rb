class Board
  attr_accessor :cups


  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2 
    @cups = Array.new(14) { Array.new }
    place_stones
  end


  def place_stones
    @cups.each_with_index do |cup, idx| 
      if idx == 6 || idx == 13 
        next
      else 
        4.times { cups[idx] << :stone }
      end 
    end 
  end


  def valid_move?(start_pos)
    if start_pos > 12 || start_pos < 0 
      raise "Invalid starting cup"
    elsif cups[start_pos].length == 0 
      raise "Starting cup is empty"
    end
  end


  def empty_cup(pos)
    cups[pos] = []
  end 


  def make_move(start_pos, current_player_name)
    held_stones = cups[start_pos].length
    empty_cup(start_pos)
    pos = start_pos 

    until held_stones == 0 
      pos += 1
      if pos == 6 && current_player_name == @name2 
        pos += 1 
      elsif pos == 13 && current_player_name == @name1 
        pos += 1 
      end 
      pos %= 14
      cups[pos] << :stone 
      held_stones -= 1
    end 

    render
    next_turn(pos)
  end


  def next_turn(ending_cup_idx)
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt 
    elsif cups[ending_cup_idx].length == 1 
      :switch 
    else  
      ending_cup_idx
    end 
  end


  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end


  def one_side_empty?
    return true if (0..5).all? {|i| cups[i] == [] }
    return true if (7..12).all? {|i| cups[i] == [] }
    false
  end


  def winner
    if cups[6].length > cups[13].length 
      return @name1
    elsif cups[6].length == cups[13].length 
      return :draw 
    else  
      return @name2 
    end 
  end
  
end
