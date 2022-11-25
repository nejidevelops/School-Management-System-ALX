# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Student.destroy_all

Post.destroy_all
Course.destroy_all
User.destroy_all

@professorx = User.create!(
  username: 'professorx',
  email: 'professorx@xmen.org',
  bio: 'I took my mom telling me to use my brain a little too literally (and extremely).',
  img_url: 'https://assets.entrepreneur.com/content/3x2/2000/20160901055636-ProfessorX.jpeg',
  password: 'telepathya',
  is_teacher: true
)

@peppapig = User.create!(
  username: 'peppapig',
  email: 'peppapig@gmail.com',
  bio: 'I have no idea how to whistle but I make some fire beats.',
  img_url: 'https://i.guim.co.uk/img/media/7a0ccba31578833efe0de8db130e57015109d067/183_0_3840_2304/master/3840.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3b95b4d4869e595a2cebff6be1c24eac',
  password: 'canyouwhistle',
  is_teacher: true
)

@oldsonic = User.create!(
  username: 'oldsonic',
  email: 'oldsonic@sega.com',
  bio: 'Come on everyone, I do NOT look THAT bad... right?',
  img_url: 'https://cdn.vox-cdn.com/thumbor/MZ3nWO2Z5j2xnHQk1-v7nMn7e04=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16208003/sonic.jpg',
  password: 'olddesignbetter',
  is_teacher: false
)

@greenmonster = User.create!(
  username: 'greenmonster',
  email: 'greenmonster@monstersvsaliens.edu',
  bio: 'Yes I\'m the green monster from Monsters vs Aliens. No, I don\'t remember what my name was either.',
  img_url: 'https://i.pinimg.com/originals/54/cf/32/54cf32a2b29960c67db19eda1560169d.jpg',
  password: 'greenguyorsomething',
  is_teacher: false
)

@telepathy = Course.create!(
  name: 'Telepathy 101',
  description: 'Learn how to communicate with just your mind.',
  category: 'Superpower',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @professorx,
  student: @greenmonster
)

@telekinesis = Course.create!(
  name: 'Telekinesis 101',
  description: 'Learn how to move sh*t with your mind.',
  category: 'Superpower',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @professorx,
  student: @oldsonic
)

@musicproduction = Course.create!(
  name: 'Music Production 101',
  description: 'Make straight fire on Day 1. Get calls from Eminem and Hannah Montana on Day 2.',
  category: 'Music',
  start_date: Date.today,
  end_date: Date.tomorrow,
  teacher: @peppapig,
  student: nil
)

Post.create!(
  user: @professorx, 
  course: @telepathy,
  media_url: 'https://i.ytimg.com/vi/_MbYGp2S5TM/hqdefault.jpg',
  content: 'Super productive day today! For my Telepathy final exam, I told my student that Joe would be so proud telepathically. The idiot asked who Joe was! Of course, I failed him, don\'t worry, no student of mine is falling for the oldest trick in the book!'
)


Post.create!(
  user: @oldsonic, 
  course: @telekinesis,
  media_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cobra-k-1526581667.jpg?resize=480:*',
  content: 'Wow, interesting day today! Not much else to share...'
)

Post.create!(
  user: @greenmonster, 
  course: @telepathy,
  media_url: 'https://c8.alamy.com/comp/DCJ3MM/close-up-shot-of-middle-aged-woman-crying-DCJ3MM.jpg',
  content: 'Rough day today everyone. We used telepathy today to find a person on Earth who remembers what my name was in the Monsters vs Aliens movie. 7 billion people. Not a single person knew. Literally crying and shaking right now.'
)

Post.create!(
  user: @peppapig, 
  course: @musicproduction,
  media_url: 'https://images.fatherly.com/wp-content/uploads/2019/07/peppa-pig-iggy.jpg?q=65&enable=upscale&w=600',
  content: 'WOW! Amazing week. At the end of my last class, Hannah Montana (as promised) sprinted into my class (which was weird because it was a Zoom call) and said \'Hey I want to rap on that beat.\' Where else do you see results like this? Register for next round of classes to find out!'
)

Post.create!(
  user: @professorx, 
  course: @telekinesis,
  media_url: 'https://c8.alamy.com/comp/F5KMEW/put-lettuce-on-bread-roll-making-hamburger-macro-series-312-F5KMEW.jpg',
  content: 'Oh my god, I can\'t believe it! I\'m so proud of my student for completing the final exam: moving lettuce on bread (non-toasted). Tears started flowing from my face. If you want miracles like this, register for upcoming courses!'
)

puts "#{User.count} users created!"
puts "#{Course.count} courses created!"
puts "#{Post.count} posts created!"

# Student.destroy_all

# Student.create!(name:"Brian Danger", age: 33, special_attack:"Failing Upwards", sensei: @john)
# Student.create!(name:"Bobby Talley", age: 95, special_attack:"The Mem-Fist Tenesseeya Later", sensei: @johnny)
# Student.create!(name:"David Whitlatch", age: 15, special_attack:"The David Whiplash", sensei: @miyagi)
# Student.create!(name:"Maddy Rombes", age: 25, special_attack:"The Rom-Bee Sting", sensei: @daniel)
# puts "#{Student.count} students created!"