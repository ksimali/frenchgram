export interface VerbApi {
    conditionnel: {
      passe1reForme: {
        conditionnelPasse1reFormeHeSheIt: string;
        conditionnelPasse1reFormeI: string;
        conditionnelPasse1reFormeThey: string;
        conditionnelPasse1reFormeWe: string;
        conditionnelPasse1reFormeYou: string;
        conditionnelPasse1reFormeYouAll: string;
      };
      passe2eForme: {
        conditionnelPasse2eFormeHeSheIt: string;
        conditionnelPasse2eFormeI: string;
        conditionnelPasse2eFormeThey: string;
        conditionnelPasse2eFormeWe: string;
        conditionnelPasse2eFormeYou: string;
        conditionnelPasse2eFormeYouAll: string;
      };
      present: {
        conditionnelPresentHeSheIt: string;
        conditionnelPresentI: string;
        conditionnelPresentThey: string;
        conditionnelPresentWe: string;
        conditionnelPresentYou: string;
        conditionnelPresentYouAll: string;
      };
    };
    
    fullDescription: string;
    
    imperatif: {
      passe: {
        imperatifPasseFirst: string;
        imperatifPasseSecond: string;
        imperatifPasseThird: string;
      };
      present: {
        imperatifPresentFirst: string;
        imperatifPresentSecond: string;
        imperatifPresentThird: string;
      };
    };
    
    indicatif: {
      futurAnterieur: {
        indicatifFuturAnterieurHeSheIt: string;
        indicatifFuturAnterieurI: string;
        indicatifFuturAnterieurThey: string;
        indicatifFuturAnterieurWe: string;
        indicatifFuturAnterieurYou: string;
        indicatifFuturAnterieurYouAll: string;
      };
      futurSimple: {
        indicatifFuturSimpleHeSheIt: string;
        indicatifFuturSimpleI: string;
        indicatifFuturSimpleThey: string;
        indicatifFuturSimpleWe: string;
        indicatifFuturSimpleYou: string;
        indicatifFuturSimpleYouAll: string;
      };
      imparfait: {
        indicatifImparfaitHeSheIt: string;
        indicatifImparfaitI: string;
        indicatifImparfaitThey: string;
        indicatifImparfaitWe: string;
        indicatifImparfaitYou: string;
        indicatifImparfaitYouAll: string;
      };
      passeAnterieur: {
        indicatifPasseAnterieurHeSheIt: string;
        indicatifPasseAnterieurI: string;
        indicatifPasseAnterieurThey: string;
        indicatifPasseAnterieurWe: string;
        indicatifPasseAnterieurYou: string;
        indicatifPasseAnterieurYouAll: string;
      };
      passeCompose: {
        indicatifPasseComposeHeSheIt: string;
        indicatifPasseComposeI: string;
        indicatifPasseComposeThey: string;
        indicatifPasseComposeWe: string;
        indicatifPasseComposeYou: string;
        indicatifPasseComposeYouAll: string;
      };
      passeSimple: {
        indicatifPasseSimpleHeSheIt: string;
        indicatifPasseSimpleI: string;
        indicatifPasseSimpleThey: string;
        indicatifPasseSimpleWe: string;
        indicatifPasseSimpleYou: string;
        indicatifPasseSimpleYouAll: string;
      };
      plusQueParfait: {
        indicatifPlusQueParfaitHeSheIt: string;
        indicatifPlusQueParfaitI: string;
        indicatifPlusQueParfaitThey: string;
        indicatifPlusQueParfaitWe: string;
        indicatifPlusQueParfaitYou: string;
        indicatifPlusQueParfaitYouAll: string;
      };
      present: {
        indicatifPresentHeSheIt: string;
        indicatifPresentI: string;
        indicatifPresentThey: string;
        indicatifPresentWe: string;
        indicatifPresentYou: string;
        indicatifPresentYouAll: string;
      };
    };
  
    infinitive: {
      passe: string;
      present: string;
    };
    
    participe: {
      passe: string;
      present: string;
    };
  
    subjonctif: {
      imparfait: {
        subjonctifImparfaitHeSheIt: string;
        subjonctifImparfaitI: string;
        subjonctifImparfaitThey: string;
        subjonctifImparfaitWe: string;
        subjonctifImparfaitYou: string;
        subjonctifImparfaitYouAll: string;
      };
      passe: {
        subjonctifPasseHeSheIt: string;
        subjonctifPasseI: string;
        subjonctifPasseThey: string;
        subjonctifPasseWe: string;
        subjonctifPasseYou: string;
        subjonctifPasseYouAll: string;
      };
      plusQueParfait: {
        subjonctifPlusQueParfaitHeSheIt: string;
        subjonctifPlusQueParfaitI: string;
        subjonctifPlusQueParfaitThey: string;
        subjonctifPlusQueParfaitWe: string;
        subjonctifPlusQueParfaitYou: string;
        subjonctifPlusQueParfaitYouAll: string;
      };
      present: {
        subjonctifPresentHeSheIt: string;
        subjonctifPresentI: string;
        subjonctifPresentThey: string;
        subjonctifPresentWe: string;
        subjonctifPresentYou: string;
        subjonctifPresentYouAll: string;
      };
    };
    
    verb: string;
    word: string;
    wordConjugateRule: string;
    wordConjugateWhichVerbModel: string;
    wordConjugateWithWhichVerb: string;
    wordVerbGroup: string;
    wordVerbType: string;
  }
  