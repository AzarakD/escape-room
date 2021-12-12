import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { sendBookingForm } from 'store/api-actions';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import {
  validatePeopleCount,
  validatePhone,
} from 'utils';
import * as S from './booking-modal.styled';

const BookingModal = ({onExitEvent}) => {
  const [formData, setFormData] = useState({
    name: '',
    peopleCount: null,
    phone: '',
    isLegal: false,
  });

  const refModal = useRef(null);
  const dispatch = useDispatch();

  const onEscKeyDown = useCallback((evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      onExitEvent();
    }
  }, [onExitEvent]);

  const onOutsideClick = useCallback((evt) => {
    if (refModal.current && !refModal.current.contains(evt.target)) {
      onExitEvent();
    }
  }, [onExitEvent]);

  useEffect(() => {
    document.addEventListener('keydown', onEscKeyDown);
    document.addEventListener('click', onOutsideClick);

    return () => {
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onOutsideClick);
    }
  }, [onEscKeyDown, onOutsideClick]);

  const onSubmit = (evt) => {
    evt.preventDefault();

    const isPhoneValid = validatePhone(formData.phone);
    const isPeopleCountValid = validatePeopleCount(formData.peopleCount);

    if (!isPhoneValid) {
      console.log('telephone');
    }

    if (!isPeopleCountValid) {
      console.log('peopleCount');
    }

    if (isPhoneValid && isPeopleCountValid) {
      dispatch(sendBookingForm(formData));
      onExitEvent();
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal ref={refModal}>
        <S.ModalCloseBtn onClick={onExitEvent}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={(evt) => onSubmit(evt)}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              onInput={(evt) => setFormData({...formData, name: evt.target.value})}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              onInput={(evt) => setFormData({...formData, phone: evt.target.value})}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              onInput={(evt) => setFormData({...formData, peopleCount: +evt.target.value})}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={() => setFormData({...formData, isLegal: !formData.isLegal})}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
