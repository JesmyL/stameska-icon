import pyautogui as pg
import time

print('переведи на поле ввода')
print('для выхода WIN+5 CTRL+C')

time.sleep(5)

for x in range(0, 400):
  pg.keyDown('ctrl')
  pg.press('l')
  pg.press('a')
  pg.keyUp('ctrl')

  pg.write('eval(localStorage.___iconsToLS);')
  time.sleep(.1)
  pg.press('enter')
  time.sleep(9)


