import styles from './TertiaryBtn.module.scss';

export default function TertiaryBtn(props) {
  const { disabled, children } = props;
  return (
    <button
      className={disabled ? styles.disabled : styles.default}
      aria-disabled={disabled}
      onClick={props.action}
    >
      {children}
    </button>
  );
}
