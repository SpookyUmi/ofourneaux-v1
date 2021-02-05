import { expect, should } from 'chai';

import { nameAccordingToCurrentRoute } from 'src/utils';

// Chapitre
describe('getTitleByRecipesNumber', () => {
  // sous chapitre structure
  describe('structure', () => {
    it('should be a function', () => {
      expect(getTitleByRecipesNumber).to.be.a('function');
    });

    it('should return a string', () => {
      expect(getTitleByRecipesNumber(0)).to.be.a('string');
    });
  });

  // sous chapitre execution
  describe('execution', () => {
    // Si Number = 0 ---> Site en cours de construction. Revenez plus tard.
    it('should handle 0 recipes', () => {
      expect(getTitleByRecipesNumber(0)).to.be.equal('Site en cours de construction. Revenez plus tard.');
    });

    // si Number = 1 ---> Découvrez notre recette
    it('should handle 1 recipes', () => {
      expect(getTitleByRecipesNumber(1)).to.be.equal('Découvrez notre recette');
    });

    // si Number = (2 <--> infini) ---> Découvrez nos recettes
    it('should handle 2+ recipes', () => {
      expect(getTitleByRecipesNumber(2)).to.be.equal('Découvrez nos recettes');
      expect(getTitleByRecipesNumber(100)).to.be.equal('Découvrez nos recettes');
    });
  });
});
