from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/benefits')
def benefits():
    return render_template('benefits.html')

@app.route('/spending')
def spending():
    return render_template('spending.html')

@app.route('/debt')
def debt():
    return render_template('debt.html')

@app.route('/employment')
def employment():
    return render_template('employment.html')

@app.route('/goals')
def goals():
    return render_template('goals.html')

@app.route('/calculate_retirement', methods=['POST'])
def calculate_retirement():
    data = request.json
    mil_retirement = float(data['mil_retirement'])
    va_disability = float(data['va_disability'])
    tsp_balance = float(data['tsp_balance'])
    annual_salary = float(data['annual_salary'])
    savings_rate = float(data['savings_rate']) / 100
    rate_of_return = float(data['rate_of_return']) / 100
    
    annual_savings = annual_salary * savings_rate
    total_savings = tsp_balance
    yearly_savings = [total_savings]
    
    for _ in range(20):
        total_savings = total_savings * (1 + rate_of_return) + annual_savings
        yearly_savings.append(total_savings)
    
    annual_retirement_income = (mil_retirement + va_disability) * 12
    income_replacement = (annual_retirement_income / annual_salary) * 100
    
    result = {
        'total_savings': total_savings,
        'annual_retirement_income': annual_retirement_income,
        'income_replacement': income_replacement,
        'yearly_savings': yearly_savings
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
