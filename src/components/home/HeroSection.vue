<script setup lang="ts">
import { ref } from 'vue';

const achievements = ref([
  { title: '50+ Years', description: 'Of Academic Excellence', icon: '🏛️' },
  { title: '15,000+', description: 'Alumni Network', icon: '👨‍🎓' },
  { title: '100+', description: 'Partner Companies', icon: '🤝' },
  { title: '95%', description: 'Employment Rate', icon: '📈' }
]);

const programs = ref([
  { title: 'Business Administration', description: 'Develop essential skills for the modern business landscape.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Computer Science', description: 'Learn programming, software development and information technology.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Education', description: 'Prepare for a career in teaching and educational leadership.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Nursing', description: 'Gain clinical experience and patient care skills.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Engineering', description: 'Study technical design and problem-solving.', image: 'https://placehold.co/600x400/003D7C/FFF' },
  { title: 'Arts & Sciences', description: 'Explore a broad range of academic disciplines.', image: 'https://placehold.co/600x400/003D7C/FFF' }
]);
</script>

<template>
    <main>
        <div class="hero-banner">
            <h1>Transforming Lives Through Education</h1>
            <p>Empowering students with values, knowledge, and skills for a better future</p>
            <div class="cta-buttons">
                <button class="primary">Enroll Now</button>
                <button class="secondary">Enter Student Portal</button>
            </div>
            <!-- <div class="floating-card"></div> -->
        </div>        
    </main>
</template>


<style lang="scss" scoped>
@use '../../style.scss' as *;

main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    position: relative;
}

.hero-banner {
    position: relative;
    width: 100%;
    min-height: 70dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;
    background: linear-gradient(135deg, #003D7C 0%, #0755a3 100%);
    color: white;    
    
    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    
    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        max-width: 600px;
    }
}

.cta-buttons {
    display: flex;
    gap: 1rem;
    
    button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &.primary {
            background-color: #FFC107;
            color: #333;
            border: none;
            
            &:hover {
                background-color: #FFD54F;
            }
        }
        
        &.secondary {
            background-color: transparent;
            color: white;
            border: 2px solid white;
            
            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }
}

.floating-card {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36rem;
  height: 200px;
  background: white;
  border-top-left-radius: 2rem;  
}

</style>