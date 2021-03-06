import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import styles from './recipeCard.module.css';

function RecipeCard({
  image, name, recipeCArdId, cardImageId, cardNameId, type, codeId }) {
  return (
    cardImageId.length ? (
      <Link
        to={ `/${type}/${codeId}` }
      >
        <Card
          className={ styles.cardContainer }
          data-testid={ recipeCArdId }
        >
          <Card.Img
            className={ styles.cardImg }
            variant="top"
            data-testid={ cardImageId }
            src={ image }
            alt={ name }
            type={ type }
          />
          <Card.Body style={{ padding: ' 5px 20px 0 20px '}}>
            <Button
              variant="outline-success"
              style={ { height: 'auto', width: '170px', marginLeft: '-35px', 
              overflow: 'hidden', border: 'none'} }
            >
              <Card.Title
                style={ { textDecoration: 'none', fontSize: '1rem' } }
                data-testid={ cardNameId }
              >
                { name }
              </Card.Title>
            </Button>
          </Card.Body>
        </Card>
      </Link>
    ) : <p>Loading</p>

  );
}

RecipeCard.propTypes = {
  image: string,
  name: string,
  recipeCArdId: string,
  cardImageId: string,
  cardNameId: string,
  type: string,
  codeId: string,
};

RecipeCard.defaultProps = {
  image: '',
  name: '',
  recipeCArdId: '',
  cardImageId: '',
  cardNameId: '',
  type: '',
  codeId: '',
};

export default RecipeCard;
