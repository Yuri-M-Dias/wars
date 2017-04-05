class Abbreviator
  def self.abbreviate(sentence)
    sentence.gsub(/[a-zA-Z]+/) do |match|
      word = match.to_s
      if match.length > 3
        word = "#{match[0]}#{match.length - 2}#{match[match.length - 1]}"
      end
      word
    end
  end
end
