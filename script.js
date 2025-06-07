// script.js
function calculateSalary() {
    // 獲取用戶輸入的數值
    const morningShifts = parseInt(document.getElementById('morningShifts').value) || 0;
    const afternoonShifts = parseInt(document.getElementById('afternoonShifts').value) || 0;
    const eveningShifts = parseInt(document.getElementById('eveningShifts').value) || 0;
    const overtimeMinutes = parseInt(document.getElementById('overtimeMinutes').value) || 0;

    // 定義班次的時數和時薪
    const hourlyRate = 600;
    const overtimeRate = 10;
    const morningHours = 3.5;
    const afternoonHours = 3.5;
    const eveningHours = 2.5;

    // 計算各班次工資
    const morningSalary = morningShifts * morningHours * hourlyRate;
    const afternoonSalary = afternoonShifts * afternoonHours * hourlyRate;
    const eveningSalary = eveningShifts * eveningHours * hourlyRate;

    // 計算加班工資
    const overtimeSalary = overtimeMinutes * overtimeRate;

    // 計算總薪水
    const totalSalary = morningSalary + afternoonSalary + eveningSalary + overtimeSalary;

    // 顯示結果
    document.getElementById('result').innerText = `總薪水: ${totalSalary} 元`;
}
