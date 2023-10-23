import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../../styles/Post.module.css";

const PopularProfiles = () => {
  return (
    <Container className={styles.PostCard}>
        <p>Most followed profiles</p>
    </Container>
  )
}

export default PopularProfiles