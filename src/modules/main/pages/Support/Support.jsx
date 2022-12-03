import { useState } from 'react';
import { MainLayout } from 'shared';

import s from './Support.module.sass';
import { validateEmail } from './support.utils';
import { Input } from './components';
import classNames from 'classnames';

const Support = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [kindOfComment, setKindOfComment] = useState(false);

  const [agreement, setAgreement] = useState(false);
  const [file, setFile] = useState('');
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isCommentInvalid, setIsCommentInvalid] = useState(false);
  const [isKindInvalid, setIsKindInvalid] = useState(false);
  const [isFileInvalid, setIsFileInvalid] = useState(false);

  const [isAgreementInvalid, setIsAgreementInvalid] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email,
      name,
      comment,
      kindOfComment,
      agreement,
      file,
    };

    let isValid = true;
    if (formData.name.trim() === '') {
      setIsNameInvalid(true);
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      setIsEmailInvalid(true);
      isValid = false;
    }

    if (formData.comment.trim() === '') {
      setIsCommentInvalid(true);
      isValid = false;
    }

    if (formData.kindOfComment === false) {
      setIsKindInvalid(true);
      isValid = false;
    }

    if (formData.file === '') {
      setIsFileInvalid(true);
      isValid = false;
    }

    if (formData.agreement === false) {
      setIsAgreementInvalid(true);
      isValid = false;
    }

    if (isValid) {
      console.log(formData);
    }
  };

  return (
    <MainLayout>
      <div className={s.root}>
        <h1 className={s.title}>Напишите нам</h1>
        <form className={s.form} onSubmit={onSubmit}>
          {/* INPUT NAME */}
          <Input
            value={name}
            placeholder={'Введите имя'}
            onChange={(event) => {
              setIsNameInvalid(false);
              setName(event.target.value);
            }}
            isInvalid={isNameInvalid}
            errorMessage={'Имя не введено'}
          />
          {/* INPUT EMAIL */}
          <Input
            value={email}
            placeholder={'Введите email'}
            onChange={(event) => {
              setIsEmailInvalid(false);
              setEmail(event.target.value);
            }}
            isInvalid={isEmailInvalid}
            errorMessage={'Email некорректный'}
          />
          <h2 className={s.heading}>Причины обращения</h2>
          {/* TEXTAREA */}
          <div className={s.textareaBox}>
            {isCommentInvalid && <div className={s.errorMsg}>Введите комментарий</div>}
            <textarea
              className={classNames(s.textarea, { [s.inputError]: isCommentInvalid })}
              type='text'
              rows={5}
              value={comment}
              placeholder='Комментарий..'
              onChange={(event) => {
                setComment(event.target.value);
                setIsCommentInvalid(false);
              }}
            />
          </div>
          {/* Radio */}
          <div className={s.radioBox}>
            {isKindInvalid && <div className={s.errorMsg}>Выберите один из вариантов</div>}
            <div className={s.radioOfferBox} tabIndex='0'>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  id='radio-offer'
                  name='kindOfComment'
                  type='radio'
                  value='offer'
                  onChange={(event) => {
                    setKindOfComment(event.target.value);
                    setIsKindInvalid(false);
                  }}
                />
                <span className={s.radioBefore}></span>
                <span className={s.radioText}>Предложение по улучшению качества</span>
              </label>
            </div>

            <div className={s.radioPretensionBox} tabIndex='0'>
              <label className={s.radioLabel}>
                <input
                  className={s.radioInput}
                  id='radio-pretension'
                  name='kindOfComment'
                  type='radio'
                  value='pretension'
                  onChange={(event) => {
                    setKindOfComment(event.target.value);
                    setIsKindInvalid(false);
                  }}
                />
                <span className={s.radioBefore}></span>
                <span className={s.radioText}>Претензия</span>
              </label>
            </div>
          </div>
          {/* FILE */}
          <div className={s.inputFileBox} tabIndex='0'>
            {isFileInvalid && <div className={s.errorMsg}>Загрузите файл</div>}
            <label htmlFor='file' className={s.inputFileLabel}>
              <input
                multiple
                accept="image/png, image/jpeg"
                type='file'
                name='file'
                id='file'
                className={s.inputFile}
                value={file}
                onChange={(event) => {
                  setFile(event.target.value);
                  console.log(event.target.value)
                  setIsFileInvalid(false);
                }}
              />
              <span className={s.inputFileSpan}></span>
              <span className={s.inputFileSpan2}></span>
              <span className={s.inputFileSpan3}>Загрузить файл</span>
            </label>
          </div>
          {/*  CHECKBOX */}
          <div className={s.checkboxBox}  tabIndex='0'>
            {isAgreementInvalid && (
              <div className={s.errorMsg}>Согласитесь на получение обновлений</div>
            )}
            <label className={s.checkboxLabel}>
              <input
                className={s.checkboxInput}
                id='checkbox'
                name='checkbox'
                type='checkbox'
                checked={agreement}
                onChange={(event) => {
                  setAgreement(event.target.checked);
                  setIsAgreementInvalid(false);
                }}
              />
              <span className={s.checkboxFake}></span>
              <span className={s.checkboxText}>Я согласен получать обновления на почту</span>
            </label>
          </div>
          {/* BUTTON SUBMIT SEND */}
          <button className={s.button} id='form-button' type={'submit'} tabIndex='0'>
            Отправить
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Support;
