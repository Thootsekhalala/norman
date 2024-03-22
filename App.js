
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const coursesData = [
  {
    name: 'BSC in Software Engineering with Multimedia',
    image: require('./software.jpg'),
    description: 'Learn programming, algorithms, and software development. Entry Requirements: Minimum of 5 credits and B+ maths.'
  },
  {
    name: 'Business Management',
    image: require('./business.jpg'),
    description: 'Study management, finance, marketing, and entrepreneurship. Entry Requirements: Minimum 3 credits in relevant subjects and a B+ in Accounting.'
  },
  {
    name: 'Deploma in Digital Media',
    image:source= require('./digital.jpg'),
    description: 'Explore graphic design, video production, and multimedia content creation. Entry Requirements: Portfolio submission.'
  },
  {
    name: 'Deploma in Fashion Design',
    image: require('./fashion.jpg'),
    description: 'Learn fashion illustration, garment construction, and textile technology. Entry Requirements: Portfolio submission.'
  },
  {
    name: 'Deploma in Hospitality Management',
    image: require('./hospitality.jpg'),
    description: 'Study hotel operations, event planning, and tourism management. Entry Requirements: Minimum 2 credits in relevant subjects and A in English.'
  }
];

export default function App() {
  const [courseRatings, setCourseRatings] = useState({});

  const rateCourse = (courseName) => {
    setCourseRatings(prevRatings => {
      const updatedRatings = { ...prevRatings };
      updatedRatings[courseName] = (updatedRatings[courseName] || 0) + 1;
      if (updatedRatings[courseName] > 6) {
        updatedRatings[courseName] = 6;
      }
      return updatedRatings;
    });
  };

  return (
    <View style={styles.container}>
      {coursesData.map((course, index) => (
        <View key={index} style={styles.course}>
          <Image source={course.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.description}>{course.description}</Text>
            <TouchableOpacity onPress={() => rateCourse(course.name)} style={styles.button}>
              <Text>Rate</Text>
            </TouchableOpacity>
            <Text style={styles.rating}>Rating: {courseRatings[course.name] || 0}</Text>
          </View>
        </View>
      ))}
        <Text style = {styles.ID}>LIMKOKWING PROSPECTUS</Text>
      <Image
      source={require('./logo.jpg')}
      style={styles.profilepicture}/>
    
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  course: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  rating: {
    fontWeight: 'bold',
  },
  ID:{
    color:'BLACK',
  },
  profilepicture:{
    width:100,
    height:100,
  },
});




