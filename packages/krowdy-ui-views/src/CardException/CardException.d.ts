interface user {
  firstName?: string;
  lastName? : string;
  photo?    : string;
}

export type CardExceptionProps = {
  user: user
};

declare const CardException: React.ComponentType<CardExceptionProps>;

export default CardException;